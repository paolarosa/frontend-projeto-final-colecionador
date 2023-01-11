import * as yup from "yup";

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .required("Digite um título para seu post"),

  message: yup
    .string()
    .required("Digite aqui sua mensagem")
});
