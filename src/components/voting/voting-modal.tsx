import { Category } from "../../types/category";
import { Recaptcha } from "../recaptcha";

interface ClosingVotesModalProps {
  categories: Category[];
  resetVotes: () => void;
  submitVotes: () => void;
  votes: Record<string, string>;
  handleRecaptcha: (value: string | null) => void;
}

export function ClosingVotesModal({
  categories,
  resetVotes,
  submitVotes,
  votes,
  handleRecaptcha,
}: ClosingVotesModalProps) {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 grid place-items-center transition-all">
      <div className="w-11/12 m-auto max-w-md transform overflow-hidden bg-brown rounded-3xl p-6 text-white text-left align-middle shadow-xl transition-all sm:p-10">
        <h2 className="text-2xl font-bold text-center text-amber-300 sm:text-4xl">
          Resumo dos votos
        </h2>

        <div className="">
          <h3 className="text-xl text-[#F5EBDC] font-semibold text-center mb-4 mt-1 sm:text-2xl">
            Categorias
          </h3>
          <ul className="list-none space-y-2">
            {categories.map((category) => (
              <li
                key={category.categoryName}
                className="flex justify-between items-center border-b pb-2 border-darkBrown/30"
              >
                <span>{category.categoryName}</span>
                <span
                  className={`ml-2 ${
                    votes[category.categoryName] &&
                    votes[category.categoryName] !== "empty"
                      ? "bg-green-600 w-6 h-6 text-center text-white rounded-md"
                      : "bg-red-600 w-6 h-6 text-center text-white rounded-md"
                  }`}
                >
                  {votes[category.categoryName] &&
                  votes[category.categoryName] !== "empty"
                    ? "✓"
                    : "✕"}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Recaptcha onVerify={handleRecaptcha} />
          </div>

          <div className="flex justify-between items-center gap-2 mt-6">
            <button
              onClick={resetVotes}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Cancelar votação
            </button>

            <button
              onClick={submitVotes}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
