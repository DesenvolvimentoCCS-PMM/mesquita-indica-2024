import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewUser, getAllUsers } from "../../utils/db";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { v4 } from "uuid";

//Validações do formulário
const formSchema = z.object({
  fullname: z.string().refine(
    (data) => {
      //Divide a string em duas partes baseado nos espaços entre elas e obriga que ambas partes tem algo escrito (nome e sobrenome).
      const partes = data.trim().split(" ");
      return partes.length >= 2 && partes.every((parte) => parte.length > 0);
    },
    {
      message: "Digite o nome e o sobrenome.",
    }
  ),
  email: z.string().email({ message: "Insira um e-mail válido" }),
  neighborhood: z.string(),
  day: z.string().refine(
    (value) =>
      //Garante que no input text sera digitado um numero e que será de 1 a 31
      /^\d{1,2}$/.test(value) && parseInt(value) >= 1 && parseInt(value) <= 31,
    {
      message: "Dia inválido.",
    }
  ),
  month: z.string(),
  year: z
    .string()
    //Garante que o ano de nascimento não é maior que o atual e que será inserido um ano.
    .refine((value) => /^\d{4}$/.test(value), {
      message: "Ano inválido.",
    })
    .refine(
      (value) => {
        const currentYear = new Date().getFullYear();
        return Number(value) <= currentYear;
      },
      { message: "O ano não pode ser maior que o atual!" }
    ),
  gender: z.string(),
});

type formSchemaType = z.infer<typeof formSchema>;

export function useRegisterValidation() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const createFullDate = (day: string, month: string, year: string) => {
    const monthMapping: Record<string, string> = {
      janeiro: "01",
      fevereiro: "02",
      março: "03",
      abril: "04",
      maio: "05",
      junho: "06",
      julho: "07",
      agosto: "08",
      setembro: "09",
      outubro: "10",
      novembro: "11",
      dezembro: "12",
    };

    const monthNumber: string | undefined = monthMapping[month.toLowerCase()];

    const formattedDate: string = `${day}/${monthNumber}/${year}`;

    return formattedDate;
  };
  const sendForm: SubmitHandler<formSchemaType> = async ({
    day,
    email,
    fullname,
    gender,
    month,
    neighborhood,
    year,
  }) => {
    const date = createFullDate(day, month, year);
    const users = await getAllUsers();

    if (!users) {
      return;
    }

    // Verifica se o usuário já existe
    const userAlreadyExists = users.some((user) => user.email === email);

    if (userAlreadyExists) {
      toast.error(
        "Ops, você já possui um cadastro, clique em ''Quero votar novamente'' para continuar!"
      );
    } else {
      const voteId = v4() + "mi2024";

      const user = await createNewUser({
        date,
        email,
        fullname,
        gender,
        neighborhood,
        voteId,
      });

      // if (user) {
      //   navigate("/votar");
      // }
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
