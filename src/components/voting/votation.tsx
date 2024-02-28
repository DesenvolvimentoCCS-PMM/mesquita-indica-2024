import { useState, useEffect } from "react";
import CategorySlide from "./slide-category";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ClosingVotesModal } from "./voting-modal";
import toast from "react-hot-toast";
import { categories } from "../../data/categorys";

export function Votation() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [isVotingComplete, setIsVotingComplete] = useState<boolean>(false);
  const remainingVotes = Number(categories.length) - Object.keys(votes).length; // quantidade de categorias - quantidade de votos
  const [recaptchaIsChecked, setRecaptchaIsChecked] = useState(false);

  const db = getFirestore();
  const navigate = useNavigate();

  //Salva um voto
  const handleVote = (categoryName: string, optionName: string) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [categoryName]: optionName,
    }));
  };

  //Avança uma categoria depois de selecionar uma opção
  const nextCategory = () => {
    const newIndex = (currentCategoryIndex + 1) % categories.length;
    setCurrentCategoryIndex(newIndex);
  };

  //Pula uma categoria
  const skipToNextCategory = () => {
    const categoryName = categories[currentCategoryIndex].categoryName;

    setVotes((prevVotes) => ({
      ...prevVotes,
      [categoryName]: "empty",
    }));

    const newIndex = (currentCategoryIndex + 1) % categories.length;
    setCurrentCategoryIndex(newIndex);
  };

  //Volta uma categoria
  const returnToPreviousCategory = () => {
    const newIndex =
      (currentCategoryIndex - 1 + categories.length) % categories.length;
    setCurrentCategoryIndex(newIndex);
  };

  //Finaliza a votação caso tenha passado por todas as categorias
  useEffect(() => {
    if (Object.keys(votes).length === categories.length) {
      setIsVotingComplete(true);
    }
  }, [votes, categories.length]);

  //Reseta os votos '-'
  const resetVotes = () => {
    setVotes({});
    setCurrentCategoryIndex(0);
    setIsVotingComplete(false);
    localStorage.removeItem("votes");
  };

  //Envia os votos
  const submitVotes = async () => {
    try {
      const voteId = localStorage.getItem("voteId");

      if (voteId && recaptchaIsChecked) {
        const votesRef = collection(db, "votos");
        await addDoc(votesRef, {
          ...votes,
          voteId,
          timestamp: new Date(),
        });
        setVotes({});
        setIsVotingComplete(false);
        toast.success("Votos enviados com sucesso!");
        setTimeout(() => navigate("/agradecimentos"), 1000);
      } else if (!voteId) {
        toast.error(
          "Você não possue permissão para votar, faça login ou cadastro!"
        );
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error("Preencha o reCAPTCHA para continuar");
      }
    } catch (error) {
      console.error("Erro ao enviar votos:", error);
      toast.error("Erro ao enviar votos, tente novamente mais tarde");
    }
  };

  const handleRecaptcha = (value: string | null) => {
    if (value) {
      setRecaptchaIsChecked(true);
    }
  };

  return (
    <div className="mt-14 ">
      {!isVotingComplete && (
        <CategorySlide
          category={categories[currentCategoryIndex]}
          onVote={handleVote}
          nextCategory={nextCategory}
          votosRestantes={remainingVotes}
        />
      )}

      <div className="w-full flex items-center gap-x-4 justify-between mt-7">
        {currentCategoryIndex > 0 && (
          <button
            onClick={returnToPreviousCategory}
            className="bg-amber-300 hover:bg-amber-500 transition-all text-brown font-medium w-24 h-10 rounded-md"
          >
            Voltar
          </button>
        )}

        {Object.keys(votes).length >= 3 && remainingVotes > 0 && (
          <button
            onClick={skipToNextCategory}
            className="bg-amber-300 hover:bg-amber-500 transition-all text-brown font-medium w-24 h-10 rounded-md"
          >
            Pular
          </button>
        )}
      </div>

      {isVotingComplete && (
        <ClosingVotesModal
          categories={categories}
          votes={votes}
          resetVotes={resetVotes}
          submitVotes={submitVotes}
          handleRecaptcha={handleRecaptcha}
        />
      )}
    </div>
  );
}
