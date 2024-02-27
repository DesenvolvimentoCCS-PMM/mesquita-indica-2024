import Oscar from "../../assets/elemento.svg";
import { BigCard } from "./big-card";
import { SmallCard } from "./small-card";
import star from "../../assets/voting/estrela1.svg";
import star2 from "../../assets/voting/estrela2.svg";

export function BannerCategorys() {
  return (
    <div className="flex relative p-1 mt-48 max-w-[340px] m-auto sm:max-w-none w-11/12 md:mt-20 justify-center lg:mt-32">
      <div className="w-full max-w-[840px] z-40 relative p-4 h-[510px] bg-gradient-to-r from-amber-800 to-amber-400 rounded-[35px] mdx:flex mdx:justify-start mdx:items-center mdx:h-[280px] lg:h-[300px]">
        <div className="z-40 flex gap-4 justify-center items-end sm:justify-start  mdx:flex-col mdx:items-start mdx:justify-center md:ml-10">
          <div className="space-y-8 flex flex-col items-center relative z-40 -top-10 mdx:flex-row mdx:top-2 mdx:gap-x-4 lg:-left-8">
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
          <div className="space-y-4 flex flex-col items-center mb-[80px] relative z-40 mdx:flex-row  mdx:hidden">
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
                  Transformação <br /> social
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

          <div className="hidden  flex-col items-center mb-[80px] relative z-40 mdx:flex-row mdx:mb-12  mdx:flex mdx:gap-x-6 lg:left-0 lg:-bottom-2">
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

          <img
            src={Oscar}
            alt="Boneco do Oscar"
            id="oscar-voting"
            className="z-50 absolute w-44 -top-44 right-0 xs:right-4 sm:w-64 drop-shadow-2xl sm:-top-10 sm:right-10 md:right-10 md:w-72 mdx:-top-20  mdx:w-52  mdx:right-0 lg:w-64 lg:-top-40"
          />

          <img
            src={star}
            alt="Estrelas douradas"
            className="w-20 absolute -top-14 left-14 sm:left-16 sm:w-28 lg:left-12"
          />
        </div>

        <img
          src={star2}
          alt="Estrela marrom"
          className="hidden absolute sm:right-36 sm:bottom-10 sm:w-28 z-50 lg:block lg:right-56 lg:bottom-14"
        />
      </div>
    </div>
  );
}
