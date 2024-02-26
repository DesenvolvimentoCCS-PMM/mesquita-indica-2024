import { Link } from "react-router-dom";
import { RegisterForm } from "./form";
import { Toaster } from "react-hot-toast";

export function Register() {
  return (
    <div className="bg-gow min-h-screen w-screen grid place-items-center p-4 sm:py-4 sm:px-0">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <div className="bg-gow grid w-full z-40 max-w-md border border-[#7d2d0a4d] rounded-[17px] overflow-hidden py-8 px-4 relative animate-[heightReverseAnimation_.4s_ease_forwards] sm:w-11/12">
        <div className="z-10 before:content-[''] before:absolute before:-left-60 before:top-52 before:-translate-y-1/2 before:w-[1000px] before:z-10 before:h-[200px] before:border before:rounded-[17px] before:bg-gradient-to-tr before:from-amber-100 before:to-amber-700 before:animate-[borderAnimation_20s_linear_infinite] after:content-[''] after:absolute after:bg-gow after:z-10 after:inset-[1px] after:rounded-[17px]" />
        <h1 className="relative uppercase text-brown text-2xl mb-7 z-40 text-center tracking-wide font-light md:text-3xl ">
          Preencha e vote
        </h1>

        <RegisterForm />

        <Link
          to={"/entrar"}
          className="z-40 text-center mt-4 underline text-brown font-medium"
        >
          Quero votar novamente
        </Link>
      </div>
    </div>
  );
}
