import Oscar from "../../assets/elemento.svg";
import { BigCard } from "./big-card";
import { SmallCard } from "./small-card";

export function BannerCategorys() {
  return (
    <div className="m-auto w-11/12 max-w-3xl h-[600px] mt-36 xs:max-w-[320px] sm:max-w-none md:-top-4 sm:mt-0 md:h-auto">
      {/* Categorys */}
      <div className="relative z-50 flex sm:absolute sm:flex sm:items-baseline sm:gap-20 sm:ml-2 md:flex-col md:gap-10 bottom-20">
        <div className="flex flex-col gap-8 items-center absolute -top-4 left-4 z-50 sm:relative sm:left-4 md:relative md:flex-row  md:items-end md:top-0">
          <BigCard title={<h1>Pertencimento</h1>} />
          <SmallCard title={<h1>Acolhimento</h1>} />
          <BigCard
            title={
              <h1>
                Atenção <br />
                Básica
              </h1>
            }
          />
          <SmallCard title={<h1>Inovação</h1>} />
        </div>
        <div className="flex flex-col gap-4 items-center absolute top-36 left-44 z-50 sm:relative sm:-left-10 sm:top-10 md:flex-row  md:relative md:-top-4 md:-left-4 md:items-start ">
          <SmallCard
            title={
              <h1>
                Transformação <br /> social
              </h1>
            }
          />
          <BigCard
            title={
              <h1>
                Mesquita do <br /> futuro
              </h1>
            }
          />
          <SmallCard
            title={
              <h1>
                Qualidade de <br /> vida
              </h1>
            }
          />
        </div>
      </div>

      {/* Oscar e Bg degradê */}
      <div className="flex relative top-0 h-[520px] md:h-[430px] lg:h-[400px]">
        <div className="w-full max-w-4xl z-30 m-auto h-[530px] bg-gradient-to-r from-amber-800 to-amber-400 rounded-[35px] md:h-[290px]"></div>
        <img
          src={Oscar}
          alt="Boneco do Oscar"
          id="oscar-voting"
          className="z-50  absolute sm:block w-44 -right-4 -top-44  sm:right-4  sm:top-10 sm:drop-shadow-2xl sm:w-64 md:w-60 md:-top-20 md:-right-4 lg:w-56"
        />
      </div>
    </div>
  );
}
