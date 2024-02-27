import { ChevronsDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F7DECC] to-[#f3e1d1] relative min-h-screen lg:grid lg:grid-cols-2 xl:grid-cols-1">
      {/* mobile */}
      <img
        src="/home-images/bg-mobile.jpg"
        alt="bg mesquita indica - mobile"
        className="w-full  -translate-y-20 sm:hidden"
      />

      {/* tablet */}
      <img
        src="/home-images/bg-tablet.jpg"
        alt="bg mesquita indica - tablet"
        className="hidden sm:block sm:w-full lg:h-full lg:object-cover xl:hidden"
      />

      {/* desktop */}
      <img
        src="/home-images/bg-desktop.jpg"
        alt="bg mesquita indica - desktop"
        className="hidden  xl:block xl:h-full xl:w-full xl:object-cover xl:min-h-screen"
      />

      <div className="absolute top-[480px] -left-8 lg:hidden">
        <p className="rotate-90 text-white font-medium">Role para baixo</p>
        <ChevronsDown
          size={44}
          strokeWidth={1.75}
          className=" text-brown rounded-md relative top-14 left-8 animate-bounce z-50"
        />
      </div>

      <div className="w-full h-10 bg-gradient-to-b from-[#F7DECC] to-[#f3e1d1] relative -top-24 left-0 right-0 blur-sm sm:-top-6 lg:hidden" />

      <div className="h-full grid place-items-center px-8 -translate-y-20 sm:py-8 sm:translate-y-0  lg:place-items-start xl:absolute xl:h-max xl:top-1/2 xl:-translate-y-1/2 xl:left-20">
        <div className="relative space-y-6 max-h-[700px] lg:space-y-10">
          <div className="relative">
            <h1 className="text-[40px] text-center leading-10 font-serif grad-mesquita mb-3 sm:text-7xl lg:text-left">
              Mesquita <br />
              Indica 2024
            </h1>

            <div className="text-blur" />
          </div>

          <p className="text-base text-center max-w-[600px] font-sans text-darkBrown sm:text-xl lg:text-left lg:max-w-[480px] xl:">
            Está de volta a premiação mais popular da cidade:
            <span className="text-[#6F4F05] font-semibold">
              o Mesquita Indica Awards. A segunda edição do projeto conta com
              novas categorias
            </span>
            , mas segue com o objetivo de despertar o sentimento de
            pertencimento em cada morador da Caçulinha da Baixada.
          </p>
          <p className="text-base text-center max-w-[600px] pb-3 text-darkBrown font-sans sm:text-xl lg:text-left lg:max-w-[480px]">
            <span className="text-[#6F4F05] font-semibold">
              Sabe o CRAS que você é atendido?
            </span>{" "}
            E aquele equipamento cultural ou esportivo que tem um espacinho
            especial no seu coração? Ah, e o bairro onde você mora?{" "}
            <span className="text-[#6F4F05] font-semibold">
              Então, essa é a hora de votar
            </span>{" "}
            nos seus preferidos para levar a simbólica estatueta.{" "}
            <span className="text-[#6F4F05] font-semibold">
              Contamos com o seu voto!
            </span>
          </p>

          <Link
            to={"/cadastrar"}
            className="h-12 px-8 flex items-center w-max text-sm m-auto bg-gradient-to-l  to-amber-500 from-brown rounded-2xl font-serif text-amber-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600 hover:scale-105 sm:h-14 sm:text-base lg:m-0"
          >
            PREENCHA O FORMULÁRIO
          </Link>
        </div>
      </div>
    </div>
  );
}
