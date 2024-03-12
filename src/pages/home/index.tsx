import { ChevronsDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {

  const categorias = {
    'Acolhimento': [
      { nome: 'cras santa terezinha', votos: 168 },
      { nome: 'cras juscelino', votos: 149 },
      { nome: 'cras banco de areia', votos: 127 },
    ],
    'Atenção Básica': [
      { nome: 'clínica da família bnh', votos: 810 },
      { nome: 'Clínica da Família Edson Passos', votos: 147 },
      { nome: 'clínica da família cosmorama', votos: 134 },
    ],
    'Inovação': [
      { nome: 'centro de controle operacional (cco)', votos: 537 },
      { nome: 'gamificação', votos: 204 },
      { nome: 'totem', votos: 150 },
    ],
    'Mesquita do futuro': [
      { nome: 'policlinica sao josé', votos: 910 },
      { nome: 'ciclovia bnh', votos: 136 },
      { nome: 'capsi', votos: 97 }
    ],
    'Pertencimento': [
      { nome: 'bnh', votos: 667 },
      { nome: 'centro', votos: 170 },
      { nome: 'cosmorama', votos: 118 }
    ],
    'Qualidade de Vida': [
      { nome: 'ciclovia baronesa', votos: 278 },
      { nome: 'vila olimpica', votos: 260 },
      { nome: 'campo da bica', votos: 125 }
    ],
    'Transformação Social': [
      { nome: 'circo chatuba', votos: 394 },
      { nome: 'cursos profissionalizantes livres', votos: 185 },
      { nome: 'praça pec', votos: 121 }
    ],
  };

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
              Veja os resultados da votação e conheça os vencedores do Mesquita Indica 2024
            <span className="text-[#6F4F05] font-semibold">

            </span>
          </p>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-2 gap-1">
              {Object.entries(categorias).map(([categoria, opcoes]) => (
                <div key={categoria} className="px-2 w-full sm:w-1/2 lg:w-1/4 mb-2 mr-2 text-darkBrown bg-stone-50 rounded-md p-2">
                  <h2 className="text-2xl font-bold mb-4">{categoria}</h2>
                  <ul className="list-decimal ml-4">
                    {opcoes.map(opcao => (
                      <li key={opcao.nome} className="mb-2">
                        {opcao.nome}: {opcao.votos} votos
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}