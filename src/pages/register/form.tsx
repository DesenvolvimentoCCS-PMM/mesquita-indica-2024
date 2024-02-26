import { useRegisterValidation } from "./validation";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const genders = ["Masculino", "Feminino", "Outro", "Prefiro não dizer"];

const neighborhoods = [
  "Alto Uruguai",
  "Bairro Industrial",
  "Banco de Areia",
  "BNH",
  "Centro",
  "Chatuba",
  "Coreia",
  "Cosmorama",
  "Cruzeiro do Sul",
  "Edson Passos",
  "Jacutinga",
  "Juscelino",
  "Rocha Sobrinho",
  "Santa Terezinha",
  "Santo Elias",
  "Vila Emil",
  "Vila Norma",
  "Outro",
];

export function RegisterForm() {
  const { errors, handleSubmit, register, sendForm, isSubmitting } =
    useRegisterValidation();

  return (
    <form
      className="flex flex-col items-center  space-y-3 w-full z-50 relative "
      onSubmit={handleSubmit(sendForm)}
    >
      <fieldset className="w-full max-w-80 space-y-1">
        <label
          htmlFor="fullname"
          className="block pb-1 text-brown text-sm sm:text-base"
        >
          Nome e Sobrenome
        </label>
        <input
          type="text"
          id="fullname"
          className="bg-gow  border border-[#7d2d0a4d] rounded-md w-full text-sm sm:text-base h-10 indent-2 text-darkBrown outline-none "
          {...register("fullname")}
          required
        />

        {errors.fullname && (
          <small className="text-sm w-full text-red-700 ml-1">
            *{errors.fullname.message}
          </small>
        )}
      </fieldset>

      <fieldset className="w-full max-w-80 space-y-1">
        <label
          htmlFor="email"
          className="block pb-1 text-brown text-sm sm:text-base"
        >
          E-mail
        </label>
        <input
          type="text"
          id="email"
          className="bg-gow  border border-[#7d2d0a4d] rounded-md w-full  text-sm sm:text-base h-10 indent-2 text-darkBrown outline-none"
          required
          {...register("email")}
        />
        {errors.email && (
          <small className="text-sm w-full text-red-700 ml-1">
            *{errors.email.message}
          </small>
        )}
      </fieldset>

      <fieldset className="w-full max-w-80 space-y-1">
        <label
          htmlFor="neighborhood"
          className="block pb-1 text-brown text-sm sm:text-base"
        >
          Bairro
        </label>
        <select
          id="neighborhood"
          className="bg-gow border border-[#7d2d0a4d] rounded-md w-full  text-sm sm:text-base h-10 indent-2 text-darkBrown outline-none"
          required
          {...register("neighborhood")}
        >
          {neighborhoods.map((neighborhood, index) => {
            return (
              <option value={neighborhood} key={index}>
                {neighborhood}
              </option>
            );
          })}
        </select>
        {errors.neighborhood && (
          <small className="text-sm w-full text-red-700 ml-1">
            {errors.neighborhood.message}
          </small>
        )}
      </fieldset>

      <div className="flex flex-col justify-start">
        <span className="pb-1 text-brown text-sm sm:text-base">
          Data de nascimento e Gênero
        </span>

        <div className="flex items-center justify-between gap-x-2 max-w-80">
          <fieldset className="w-3/12 space-y-1">
            <label htmlFor="day" className="sr-only">
              Dia
            </label>
            <input
              type="text"
              id="day"
              className="bg-gow  border border-[#7d2d0a4d] rounded-md text-sm h-10 indent-2 text-darkBrown outline-none w-full text sm:text-base placeholder:text-ph"
              required
              {...register("day")}
              placeholder="Dia"
            />
          </fieldset>

          <fieldset className="w-2/5 space-y-1">
            <label htmlFor="month" className="sr-only">
              Mês
            </label>
            <select
              id="month"
              className="bg-gow  border border-[#7d2d0a4d] rounded-md text-sm sm:text-base h-10 indent-1 text-darkBrown outline-none w-full placeholder:text-ph"
              required
              {...register("month")}
            >
              {months.map((month, index) => {
                return (
                  <option
                    value={month}
                    key={index}
                    className="text-sm sm:text-base text-darkBrown"
                  >
                    {month}
                  </option>
                );
              })}
            </select>
          </fieldset>

          <fieldset className="w-3/12 space-y-1">
            <label htmlFor="year" className="sr-only">
              Ano
            </label>
            <input
              type="text"
              id="year"
              required
              className="bg-gow  border border-[#7d2d0a4d] rounded-md text-sm sm:text-base h-10 indent-2 text-darkBrown outline-none w-full placeholder:text-ph"
              {...register("year")}
              placeholder="Ano"
            />
          </fieldset>
        </div>
      </div>

      <div className="w-full max-w-80 flex flex-col items-start gap-y-1">
        {errors.day && (
          <small className="text-sm w-full text-red-700 ml-1">
            *{errors.day.message}
          </small>
        )}
        {errors.month && (
          <small className="text-sm w-full text-red-700 ml-1">
            *{errors.month.message}
          </small>
        )}
        {errors.year && (
          <small className="text-sm w-full text-red-700 ml-1">
            *{errors.year.message}
          </small>
        )}
      </div>

      <fieldset className="w-full max-w-80 space-y-1 pb-4">
        <label
          htmlFor="gender"
          className="block pb-1 text-brown text-sm sm:text-base sr-only"
        >
          Genêro
        </label>
        <select
          id="gender"
          className="bg-gow h-10  border border-[#7d2d0a4d] rounded-md w-full text-sm text-darkBrown indent-1 sm:text-base"
          {...register("gender")}
          required
        >
          {genders.map((gender, index) => {
            return (
              <option
                value={gender}
                key={index}
                className="text-sm sm:text-base indent-2 text-darkBrown outline-none h-10"
              >
                {gender}
              </option>
            );
          })}
        </select>

        {errors.gender && (
          <small className="text-sm text-red-700">
            {errors.gender.message}
          </small>
        )}
      </fieldset>

      <button
        className="w-full max-w-80 space-y-1 h-10 text-sm sm:text-lg bg-brown rounded-md text-gold transition-all hover:scale-95 disabled:bg-opacity-80 disabled:pointer-events-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Avançando..." : "Avançar"}
      </button>
    </form>
  );
}
