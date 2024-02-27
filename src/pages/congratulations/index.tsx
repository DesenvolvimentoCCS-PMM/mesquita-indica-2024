import { Share } from "lucide-react";
import { Link } from "react-router-dom";

export function Congratulations() {
  const handleShare = () => {
    const linkToShare = "https://indica.mesquita.rj.gov.br/";

    if (navigator.share) {
      navigator
        .share({
          title: "Mesquita Indica 2024",
          text: "Ele voltou, vote agora!",
          url: linkToShare,
        })
        .then(() => console.log("Link compartilhado com sucesso"))
        .catch((error) => console.error("Erro ao compartilhar link", error));
    } else {
      window.open(linkToShare, "_blank");
    }
  };

  return (
    <div className="min-h-screen w-full grid place-items-start bg-gradient-to-b from-darkBrown to-amber-950 p-4">
      <div className="h-96 w-96 rounded-full filter bg-amber-300 blur-[100px] bg-opacity-70 fixed -top-52 -right-64 z-50"></div>

      <div className="flex flex-col items-center justify-center m-auto max-w-[300px] w-11/12 gap-y-9 sm:max-w-[370px] animate-[scaleAnimation_.7s_ease_forwards]">
        <h1 className="text-5xl py-2 text-center transition-all font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-400 sm:text-6xl">
          Obrigado!
        </h1>

        <p className="text-base text-center text-[#DFD6A6] sm:text-lg">
          Agradecemos pela participação no
          <br />{" "}
          <b>
            Mesquita Indica! Cada voto faz a<br /> diferença,
          </b>{" "}
          por isso, você pode
          <b>
            {" "}
            voltar e<br /> votar quantas vezes quiser.
          </b>
        </p>

        <p className="text-base text-center text-[#DFD6A6] sm:text-lg">
          Ah, e não esqueça de{" "}
          <b>
            compartilhar com <br /> os seus amigos!
          </b>
        </p>

        <button
          className="flex items-center justify-center gap-x-4 bg-brown text-[#DFD6A6] h-14 w-full px-3 text-center rounded-lg sm:text-lg"
          aria-label="Compartilhar com seus amigos"
          onClick={handleShare}
        >
          <Share size={18} />
          Compartilhe com seus amigos!
        </button>

        <div className="flex flex-row justify-between items-center  w-full mt-4">
          <Link
            to="/cadastrar"
            className=" transition-all text-amber-400 flex items-center font-medium w-32 h-10 rounded-md sm:text-lg"
          >
            Novo cadastro
          </Link>

          <Link
            to="/votar"
            className="bg-amber-300 hover:bg-amber-500 transition-all text-base flex items-center flex-wrap text-center text-brown font-semibold px-3 h-12 rounded-md sm:text-lg"
          >
            Votar novamente
          </Link>
        </div>
      </div>
    </div>
  );
}
