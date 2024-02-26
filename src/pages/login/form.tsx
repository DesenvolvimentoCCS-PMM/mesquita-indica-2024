import { Link } from "react-router-dom";
import { useLoginValidation } from "./validation";

export function LoginForm() {
  const { errors, handleSubmit, isSubmitting, register, sendForm } =
    useLoginValidation();

  return (
    <form
      className="z-40 grid place-items-center gap-y-4"
      onSubmit={handleSubmit(sendForm)}
    >
      <fieldset className="w-full max-w-80 space-y-1 ">
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

      <div className="flex items-center justify-between w-full max-w-80 ">
        <Link
          to={"/cadastrar"}
          className="z-40 text-center text-sm sm:text-base underline text-brown font-medium"
        >
          Não possuo cadastro
        </Link>

        <button
          className="space-y-1 w-36 h-10 text-sm sm:text-lg bg-brown rounded-md text-gold transition-all hover:scale-95 disabled:bg-opacity-80 disabled:pointer-events-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Avançando..." : "Avançar"}
        </button>
      </div>
    </form>
  );
}
