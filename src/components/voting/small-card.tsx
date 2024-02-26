import OscarCircle from "../../assets/voting/circle.svg";

interface SmallCardProps {
  title: JSX.Element;
}

export function SmallCard({ title }: SmallCardProps) {
  return (
    <div className="w-[110px] h-[105px] rounded-[18px] bg-card-small flex items-center justify-center lg:w-[120px] lg:h-[115px]">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <img src={OscarCircle} alt="Circulo Oscar" className="w-12 h-w-12" />

        <div className="text-xs text-gold font-semibold text-center">
          {title}
        </div>
      </div>
    </div>
  );
}
