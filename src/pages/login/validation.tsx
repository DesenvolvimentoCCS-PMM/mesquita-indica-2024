import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { findUser } from "../../utils/db";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//Validações do formulário
const formSchema = z.object({
  email: z.string().email({ message: "Insira um e-mail válido" }),
});

type formSchemaType = z.infer<typeof formSchema>;

export function useLoginValidation() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const sendForm: SubmitHandler<formSchemaType> = async ({ email }) => {
    //Procura os dados do usuario
    const user = await findUser(email);

    //Mostrar erro caso não encontre os dados
    if (
      (user != undefined && !Object.keys(user).length) ||
      user === undefined
    ) {
      toast.error("Usuário não encontrado!");
    } else {
      //Pegar dados dele e adicionar voteId no localstorage
      localStorage.setItem("voteId", user.voteId);
      navigate("/votar");
    }
  };

  return {
    register,
    errors,
    handleSubmit,
    sendForm,
    isSubmitting,
  };
}
