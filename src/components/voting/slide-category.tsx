import { useState } from "react";
import { Category, Option } from "../../types/category";
import Slider from "react-slick";

interface CategorySlideProps {
  category: Category;
  onVote: (categoryName: string, optionName: string) => void;
  nextCategory: () => void;
  votosRestantes: number;
}

const CategorySlide: React.FC<CategorySlideProps> = ({
  category,
  onVote,
  nextCategory,
  votosRestantes,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (optionName: string) => {
    if (selectedOption === optionName) {
      onVote(category.categoryName, optionName);
      nextCategory();
    } else {
      setSelectedOption(optionName);
    }
  };

  const settingsSlide = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          className: "center",
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <div>
      <div className="grid place-content-center text-center gap-y-4 mb-8">
        <h2 className="text-3xl text-center transition-all font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-400 md:text-5xl xl:text-6xl">
          {category.categoryName}
        </h2>
        <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-400 sm:text-lg md:text-2xl">
          Escolha sua opção favorita e vote abaixo
        </p>
        <p className="h-8 px-4 flex items-center w-max text-sm m-auto bg-gradient-to-l  to-brown from-amber-500 rounded-md text-white transition-all duration-300 hover:shadow-2xl sm:h-10 sm:px-5 sm:text-base">
          Votos restantes: {votosRestantes}
        </p>
      </div>

      <Slider {...settingsSlide}>
        {category.options.map((option: Option) => (
          <div
            key={option.name}
            className={`relative p-4 cursor-pointer`}
            onClick={() => handleSelectOption(option.name)}
          >
            <div className="flex flex-col items-center gap-y-4 w-full">
              <div className="relative w-full">
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-full object-contain rounded-2xl sm:rounded-[45px] "
                />
                {selectedOption === option.name && (
                  <div className="absolute inset-0 bg-green-500/75 flex justify-center items-center rounded-3xl sm:rounded-[45px]">
                    <span className="text-white text-3xl font-semibold ">
                      Selecionar voto
                    </span>
                  </div>
                )}
              </div>
              <span className="text-sm text-amber-400 font-medium text-center sm:text-xl max-w-[300px]">
                {option.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlide;
