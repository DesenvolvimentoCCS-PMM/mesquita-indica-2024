import { init } from "aos";
import { useEffect } from "react";

interface PodioProps {
  position: 1 | 2 | 3;
  value: string;
  votes: number;
}

export function Podio({ position, value, votes }: PodioProps) {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {position === 1 && (
        <div
          className="flex flex-col items-center gap-y-1"
          data-aos="zoom-in-up"
          data-aos-delay="1200"
        >
          <div className="flex flex-col items-center">
            <p className="text-base max-w-[100px] text-center leading-5 text-[#e2aa44] font-semibold uppercase md:text-xl md:max-w-[140px]">
              {value}
            </p>

            <span className="text-white text-sm">{votes} votos</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-4 bg-[#e2aa44] md:w-28 md:h-7" />

            <div className="w-9 h-28 bg-[#e2aa44] flex items-center justify-center md:w-16 md:h-44">
              <span className="text-[#7C560F] text-3xl font-bold md:text-5xl">
                1
              </span>
            </div>
          </div>
        </div>
      )}
      {position === 2 && (
        <div
          className="flex flex-col items-center gap-y-1"
          data-aos="zoom-in-up"
          data-aos-delay="800"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm max-w-[100px] text-center leading-5 text-[#c0c0c0] font-semibold uppercase md:text-xl md:max-w-[140px]">
              {value}
            </span>
            <span className="text-white text-sm">{votes} votos</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-4 bg-[#c0c0c0] md:w-28 md:h-7" />

            <div className="w-9 h-20 bg-[#c0c0c0] flex items-center justify-center md:w-16 md:h-32">
              <span className="text-[#646464] text-3xl font-bold md:text-5xl">
                2
              </span>
            </div>
          </div>
        </div>
      )}
      {position === 3 && (
        <div
          className="flex flex-col items-center gap-y-1"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm max-w-[100px] text-center leading-5 text-[#CD7F32] font-semibold uppercase md:text-xl md:max-w-[140px]">
              {value}
            </span>
            <span className="text-white text-sm">{votes} votos</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-4 bg-[#CD7F32] md:w-28 md:h-7" />

            <div className="w-9 h-16 bg-[#CD7F32] flex items-center justify-center md:w-16 md:h-24">
              <span className="text-[#74410F] text-3xl font-bold md:text-5xl">
                3
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
