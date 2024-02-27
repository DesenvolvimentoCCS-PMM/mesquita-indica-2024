import Arrow from "../../assets/voting/arrow.svg";

export function BannerText() {
  return (
    <div className="text-white flex flex-col items-center pb-20 gap-y-2 p-8 md:pl-20">
      <h2 className="text-xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-400 sm:text-lg md:text-2xl">
        Antes de votar
      </h2>
      <h1 className="text-2xl text-center transition-all font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-400 md:text-5xl">
        Conheça as categorias
      </h1>
      <a
        href="#votacao"
        className="text- flex items-center justify-center gap-x-4 bg-brown rounded-3xl w-24 h-8 p-1  text-amber-300 sm:text-base"
      >
        Veja
        <img src={Arrow} className="w-4" />
      </a>
    </div>
  );
}
