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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          className: "center",
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          className: "center",
          centerMode: true,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-6 sm:mx-10">
      <div className="grid place-content-center text-center mb-8">
        <span className="text-lg relative -bottom-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-amber-300 sm:text-xl sm:mb-0 md:text-3xl">
          Categoria
        </span>
        <h2 className="text-3xl uppercase py-2 text-center transition-all font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-400 md:text-5xl">
          {category.categoryName}
        </h2>
        {category.description && (
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-400 text-base font-medium relative top-0 sm:text-xl">
            {"("}
            {category.description}
            {")"}
          </h3>
        )}
        <p className="text-sm font-semibold bg-clip-text mt-8 mb-4 text-transparent bg-gradient-to-r from-amber-600 to-amber-400 sm:text-lg md:text-2xl">
          Escolha sua opção favorita e vote abaixo
        </p>
        <p
          className="h-8 px-4 flex items-center w-max text-sm m-auto bg-gradient-to-l  to-brown from-amber-500 rounded-md text-white transition-all duration-300 hover:shadow-2xl sm:h-10 sm:px-5 sm:text-base"
          id="opcoes"
        >
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
              <div className="relative w-full group flex  object-cover max-w-[300px]">
                <img
                  src={option.image}
                  alt={option.name}
                  className="h-[212px] object-cover w-full max-w-[300px] rounded-2xl sm:rounded-3xl m-auto lg:h-[312px]"
                />
                {selectedOption === option.name && (
                  <div className="absolute inset-0 max-w-[300px] bg-green-500/75 flex justify-center items-center rounded-2xl sm:rounded-3xl">
                    <span className="text-white text-xl text-center font-semibold sm:text-2xl">
                      Clique para confirmar
                    </span>
                  </div>
                )}

                <div
                  className={`opacity-0 absolute inset-0 max-w-[300px] bg-green-500/75 justify-center items-center rounded-2xl sm:rounded-3xl flex transition-all duration-300 group-hover:opacity-100 ${
                    selectedOption === option.name && "hidden"
                  }`}
                >
                  <span className="text-white text-xl font-semibold sm:text-2xl">
                    Votar
                  </span>
                </div>
              </div>

              <span className="text-lg text-amber-400 font-medium text-center lg:text-xl max-w-[300px] uppercase mb-4">
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
