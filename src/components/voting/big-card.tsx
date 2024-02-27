import OscarCircle from "../../assets/voting/circle.svg";

interface BigCardProps {
  title: JSX.Element;
}

export function BigCard({ title }: BigCardProps) {
  return (
    <div className="w-[130px] h-[130px] rounded-[25px] degrade flex items-center justify-center card-oscar lg:w-[150px] lg:h-[150px]">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <img src={OscarCircle} alt="Circulo Oscar" className="w-14 h-w-14" />

        <h1 className="text-sm text-gold font-semibold text-center">{title}</h1>
      </div>
    </div>
  );
}
