import { useState, useEffect } from "react";
import { Category } from "../../types/category";
import CategorySlide from "./slide-category";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ClosingVotesModal } from "./voting-modal";
import toast from "react-hot-toast";

const categories: Category[] = [
  {
    categoryName: "Pertencimento",
    description: "Bairro mais amado",
    options: [
      {
        name: "Alto Uruguai",
        image: "/options/categorias/pertencimento/alto-uruguai.jpg",
      },
      {
        name: "Bairro Industrial",
        image: "/options/categorias/pertencimento/bairro-industrial.jpg",
      },
      {
        name: "Banco de Areia",
        image: "/options/categorias/pertencimento/banco-de-areia.jpg",
      },
      { name: "BNH", image: "/options/categorias/pertencimento/bnh.jpg" },
      {
        name: "Centro",
        image: "/options/categorias/pertencimento/centro.jpg",
      },
      {
        name: "Chatuba",
        image: "/options/categorias/pertencimento/chatuba.jpg",
      },
      {
        name: "Coreia",
        image: "/options/categorias/pertencimento/coreia.jpg",
      },
      {
        name: "cosmorama",
        image: "/options/categorias/pertencimento/cosmorama.jpg",
      },
      {
        name: "cruzeiro do sul",
        image: "/options/categorias/pertencimento/cruzeiro-do-sul.jpg",
      },
      {
        name: "edson passos",
        image: "/options/categorias/pertencimento/edson-passos.jpg",
      },
      {
        name: "jacutinga",
        image: "/options/categorias/pertencimento/jacutinga.jpg",
      },
      {
        name: "rocha sobrinho",
        image: "/options/categorias/pertencimento/rocha-sobrinho.jpg",
      },
      {
        name: "santa terezinha",
        image: "/options/categorias/pertencimento/santa-terezinha.jpg",
      },
      {
        name: "santo elias",
        image: "/options/categorias/pertencimento/santo-elias.jpg",
      },
      {
        name: "vila emil",
        image: "/options/categorias/pertencimento/vila-emil.jpg",
      },
      {
        name: "vila norma",
        image: "/options/categorias/pertencimento/vila-norma.jpg",
      },
    ],
  },
  {
    categoryName: "Mesquita do futuro",
    description: "Obra mais aguardada",
    options: [
      {
        name: "Clínica da Família Rocha Sobrinho",
        image: "/options/categorias/mesquita-do-futuro/cf-rocha-sobrinho.jpg",
      },
      {
        name: "policlinica sao josé",
        image:
          "/options/categorias/mesquita-do-futuro/policlinica-sao jose.jpeg",
      },
      {
        name: "ciclovia bnh",
        image: "/options/categorias/mesquita-do-futuro/ciclovia-bnh.jpg",
      },
      {
        name: "ciclovia getulio de moura",
        image:
          "/options/categorias/mesquita-do-futuro/ciclovia-getulio-de-moura.jpg",
      },
      {
        name: "complexo potyguar",
        image: "/options/categorias/mesquita-do-futuro/complexo-potyguar.jpg",
      },
      {
        name: "complexo união",
        image: "/options/categorias/mesquita-do-futuro/complexo-uniao.jpg",
      },
      {
        name: "policlinica cosmorama",
        image:
          "/options/categorias/mesquita-do-futuro/policlinica-cosmorama.jpg",
      },
    ],
  },
  {
    categoryName: "Atenção Básica",
    description: "Clínica da familía favorita",
    options: [
      {
        name: "Clínica da Família Edson Passos",
        image: "/options/categorias/atencao-basica/cf-edson-passos.jpg",
      },
      {
        name: "Clínica da Família jorge campos",
        image: "/options/categorias/atencao-basica/cf-jorge-campos.jpg",
      },
      {
        name: "Clínica da Família banco de areia",
        image:
          "/options/categorias/atencao-basica/clínica-da-familia-banco-de-areia.jpg",
      },
      {
        name: "Clínica da Família bnh",
        image: "/options/categorias/atencao-basica/clínica-da-família-bnh.jpg",
      },
      {
        name: "Clínica da Família cosmorama",
        image:
          "/options/categorias/atencao-basica/clínica-da-família-cosmorama.jpg",
      },
      {
        name: "Clínica da Família frança leite",
        image:
          "/options/categorias/atencao-basica/clínica-da-família-frança-leite.jpg",
      },
      {
        name: "Clínica da Família jacutinga",
        image:
          "/options/categorias/atencao-basica/clínica-da-família-jacutinga.jpg",
      },
      {
        name: "Clínica da Família juscelino",
        image:
          "/options/categorias/atencao-basica/clínica-da-família-juscelino.jpg",
      },
      {
        name: "Clínica da Família são josé",
        image:
          "/options/categorias/atencao-basica/clínica-da-família-são-josé.jpg",
      },
      {
        name: "Clínica da Família walter borges",
        image:
          "/options/categorias/atencao-basica/clínica-da-família-walter-borges.jpg",
      },
    ],
  },
  {
    categoryName: "Inovação",
    options: [
      {
        name: "Centro de Controle Operacional ",
        image: "/options/categorias/inovacao/cco.jpeg",
      },
      {
        name: "Espaço Colabore",
        image: "/options/categorias/inovacao/ec.jpeg",
      },
      {
        name: "Gameficação",
        image: "/options/categorias/inovacao/gameficacao.jpeg",
      },
      {
        name: "Totem",
        image: "/options/categorias/inovacao/totem.jpeg",
      },
    ],
  },
  {
    categoryName: "Acolhimento",
    description: "CRAS favorito",
    options: [
      {
        name: "cras banco de areia",
        image: "/options/categorias/acolhimento/cras-banco-de-areia.jpg",
      },
      {
        name: "cras chatuba",
        image: "/options/categorias/acolhimento/cras-chatuba.jpg",
      },
      {
        name: "cras juscelino",
        image: "/options/categorias/acolhimento/cras-juscelino.jpg",
      },
      {
        name: "cras rocha sobrinho",
        image: "/options/categorias/acolhimento/cras-rocha-sobrinho.jpg",
      },
      {
        name: "cras santa terezinha",
        image: "/options/categorias/acolhimento/cras-santa-terezinha.jpg",
      },
      {
        name: "cras santo elias",
        image: "/options/categorias/acolhimento/cras-santo-elias.jpg",
      },
    ],
  },
  {
    categoryName: "Qualidade de Vida",
    description: "Local de esporte e lazer favorito",
    options: [
      {
        name: "campo da bica",
        image: "/options/categorias/qualidade-de-vida/campo-da-bica.jpg",
      },
      {
        name: "ciclovia baronesa",
        image: "/options/categorias/qualidade-de-vida/ciclovia-baronesa.jpg",
      },
      {
        name: "ciclovia getulio de moura",
        image:
          "/options/categorias/qualidade-de-vida/ciclovia-getulio-de-moura.jpg",
      },
      {
        name: "ciclovia feliciano sodre",
        image: "/options/categorias/qualidade-de-vida/feliciano-sodre.jpg",
      },
      {
        name: "praça cosmorama",
        image: "/options/categorias/qualidade-de-vida/praça-cosmorama.jpg",
      },
      {
        name: "praça pec",
        image: "/options/categorias/qualidade-de-vida/praça-pec.jpg",
      },
      {
        name: "praça telemar",
        image: "/options/categorias/qualidade-de-vida/praça-telemar.jpg",
      },
      {
        name: "praça brasil",
        image: "/options/categorias/qualidade-de-vida/prc-brasil.jpeg",
      },
      {
        name: "vila olimpica",
        image: "/options/categorias/qualidade-de-vida/vila-olimpica.jpg",
      },
    ],
  },
  {
    categoryName: "Transformação Social",
    description: "Local com curso e oficina favorito",
    options: [
      {
        name: "circo chatuba",
        image: "/options/categorias/transformacao-social/circo-chatuba.jpg",
      },
      {
        name: "cras santa terezinha",
        image:
          "/options/categorias/transformacao-social/cras-santa-terezinha.jpg",
      },
      {
        name: "cursos profissionalizantes livres",
        image:
          "/options/categorias/transformacao-social/cursos-prof-livres.jpeg",
      },
      {
        name: "espaço convive",
        image: "/options/categorias/transformacao-social/espaço-convive.jpg",
      },
      {
        name: "espaço da mulher mesquitense",
        image:
          "/options/categorias/transformacao-social/espaço-mulher-mesquitense.jpg",
      },
      {
        name: "praça pec",
        image: "/options/categorias/transformacao-social/praça-pec.jpg",
      },
    ],
  },
];

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
        toast.success("Votos enviados com sucesso, obrigado por participar!");

        setTimeout(() => navigate("/"), 2300);
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

      <div className="w-full flex items-center gap-x-4 justify-between mt-2">
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
          isOpen={isVotingComplete}
          votes={votes}
          resetVotes={resetVotes}
          submitVotes={submitVotes}
          handleRecaptcha={handleRecaptcha}
        />
      )}
    </div>
  );
}
