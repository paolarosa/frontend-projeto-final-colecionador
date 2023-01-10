import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginRegisterContext } from "../../../contexts/contexLoginRegister";
import { StyledButton } from "../../../styles/Button";
import { Input } from "../../../styles/Input";
import { Textarea } from "../../../styles/textarea";
import { postSchema } from "./formSchema";
import { FormStyled } from "./styles";

interface iUserPostFormValues {
  userId: number;
  title: string;
  message: string;
}

export const PostForm = () => {
  const { forumPostMessageRequest, user, allUsers } =
    useContext(LoginRegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserPostFormValues>({
    mode: "onChange",
    resolver: yupResolver(postSchema),
  });

  const onSubmit: SubmitHandler<iUserPostFormValues> = (data) => {
    forumPostMessageRequest(data);
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        className="input"
        label="Title"
        type="text"
        placeholder=""
        register={register("title")}
      />
      {errors ? <span>{errors.title?.message}</span> : ""}

      <Textarea
        className="textarea"
        label="Message"
        name="message"
        id="message"
        cols={30}
        rows={14}
        register={register("message")}
      />
      {errors ? <span>{errors.message?.message}</span> : ""}

      <StyledButton buttonSize="default" buttonStyle="primary" type="submit">
        Enviar
      </StyledButton>
    </FormStyled>
  );
};
