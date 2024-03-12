import { results } from "../../data/results";
import Hexagono from "../../assets/poligono.svg";
import { Podio } from "../../components/podio";
import { useEffect } from "react";
import { init } from "aos";
import "aos/dist/aos.css";
// import { ChevronsDown } from "lucide-react";

export function Result() {
  useEffect(() => {
    init();
  }, []);

  return (
    <main className="grid gap-5 w-full bg-gradient-to-tl from-amber-900 to-amber-950 min-h-screen grid-rows-[min-content_max_content] pb-24">
      {results.map((category, index) => {
        return (
          <>
            <section
              className="flex flex-col items-center justify-center max-w-[1600px] mx-auto z-20 pt-4 md:pt-0"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="500"
              key={index}
            >
              {/* <div className="absolute -left-7 top-72 flex flex-col items-center md:top-[480px]">
                <p className="mb-2 rotate-90 text-xs text-white/20 sm:text-sm">
                  Role para baixo
                </p>
                <ChevronsDown
                  size={28}
                  strokeWidth={1.75}
                  className=" text-white rounded-md relative top-10 animate-bounce z-50"
                />
              </div> */}
              <div className="flex flex-col items-center relative top-10 md:gap-y-4 md:top-20">
                <h1 className="text-3xl text-center text-[#DFD6A6] font-semibold md:text-5xl">
                  {category.title}
                </h1>
                <h2 className="text-xl text-[#DFD6A6] font-medium md:text-3xl">
                  Resultado Final
                </h2>
              </div>

              {/* Podio  */}
              <div className="relative top-14 md:top-20">
                <figure className="mt-4 block md:mt-6">
                  <img
                    src={Hexagono}
                    alt=""
                    className="w-[400px] md:w-[600px]"
                  />
                </figure>

                <div className="absolute grid grid-cols-3 items-end top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-max">
                  <Podio
                    position={2}
                    value={category.options[1].name}
                    votes={category.options[1].votes}
                  />
                  <Podio
                    position={1}
                    value={category.options[0].name}
                    votes={category.options[0].votes}
                  />
                  <Podio
                    position={3}
                    value={category.options[2].name}
                    votes={category.options[2].votes}
                  />
                </div>
              </div>
            </section>
            <section className=" bg-[#956713] z-10 py-20 md:pt-24 grid place-items-center">
              <div className="max-w-[1400px]  flex flex-col flex-wrap justify-center gap-6 sm:flex-row">
                {category.options.map((option, index) => {
                  if (option.pos && option.pos > 3) {
                    return (
                      <div
                        className="flex items-center  w-auto justify-start gap-x-2 md:pl-0 "
                        key={index}
                        data-aos="fade-up"
                      >
                        <span className="bg-[#DFD6A6] rounded-full h-10 w-10 text-sm max-w-[100px] text-center leading-5 text-[#946414] font-bold flex items-center justify-center md:text-2xl md:max-w-[140px]">
                          {option.pos}º
                        </span>
                        <p className="max-w-[200px] text-sm capitalize text-[#DFD6A6] font-medium md:text-xl">
                          {option.name}
                        </p>
                        <span className="bg-[#dfd6a6] rounded-md text-sm text-[#946414] w-max p-1 font-medium">
                          {option.votes} votos
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
            </section>
          </>
        );
      })}
    </main>
  );
}
