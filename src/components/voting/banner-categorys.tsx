import Oscar from "../../assets/elemento.svg";
import { BigCard } from "./big-card";
import { SmallCard } from "./small-card";

export function BannerCategorys() {
  return (
    <div className="flex relative h-[700px] p-1 mt-24">
      <div className="w-full max-w-4xl z-50 relative h-[510px] bg-gradient-to-r from-amber-800 to-amber-400 rounded-[35px]">
        <div className="z-50 flex gap-4 justify-center items-end">
          <div className="space-y-8 flex flex-col items-center relative -top-6">
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
          <div className="space-y-4 flex flex-col items-center mb-[70px]">
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

          <img
            src={Oscar}
            alt="Boneco do Oscar"
            id="oscar-voting"
            className="z-50 absolute w-44 -top-44 right-0 "
          />
        </div>
      </div>
    </div>
  );
}
