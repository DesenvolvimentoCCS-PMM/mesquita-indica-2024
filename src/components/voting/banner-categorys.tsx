import Oscar from "../../assets/elemento.svg";
import { BigCard } from "./big-card";
import { SmallCard } from "./small-card";

export function BannerCategorys() {
  return (
    <div className="m-auto w-11/12 max-w-3xl relative md:-top-4">
      {/* Categorys */}
      <div className="relative z-50">
        <div className="flex flex-col gap-4 items-center absolute -top-6 left-5 z-50 sm:left-20 md:flex-row md:-left-4 md:items-end md:top-14">
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
        <div className="flex flex-col gap-4 items-center absolute top-4 left-40 z-50 sm:left-56 sm:top-10 md:flex-row md:top-52 md:left-4 md:items-start lg:top-56">
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
      <div className="flex relative sm:top-0 md:top-4 h-[520px] md:h-[340px] lg:h-[400px]">
        <div className="w-full max-w-4xl z-30 m-auto h-[450px] bg-gradient-to-r from-amber-800 to-amber-400 rounded-[35px] md:h-[230px] lg:h-[280px]"></div>
        <img
          src={Oscar}
          alt="Boneco do Oscar"
          id="oscar-voting"
          className="z-50 absolute w-44 -right-4 -top-4 sm:right-4 md:-top-32 md:-right-4 md:w-64 "
        />
      </div>
    </div>
  );
}
