export function BannerText() {
  return (
    <div className="text-white flex flex-col items-center  gap-y-2">
      <h2 className="text-xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-400  sm:text-2xl">
        Antes de votar
      </h2>
      <h1 className="text-3xl text-center pb-4 transition-all font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-400 sm:text-3xl md:text-5xl">
        Conheça as categorias
      </h1>
      <a
        href="#opcoes"
        className=" flex items-center justify-center gap-x-4 bg-brown rounded-3xl w-max p-3 h-10 text-sm  text-amber-300 sm:text-base"
      >
        Clique aqui e vote
      </a>
    </div>
  );
}
