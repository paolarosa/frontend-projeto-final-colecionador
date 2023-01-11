import * as yup from "yup";

export const postSchema = yup.object().shape({
  image: yup.string().required("Digite o endereço da imagem"),

  title: yup.string(),

  author: yup.string(),

  published: yup.number(),

  description: yup.string(),
});
