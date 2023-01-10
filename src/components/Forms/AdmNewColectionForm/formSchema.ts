import * as yup from "yup";

export const postSchema = yup.object().shape({
  name: yup
    .string()
    .required("Digite um nome para a coleção"),

});
