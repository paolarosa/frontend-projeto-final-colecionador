import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginRegisterContext } from "../../../contexts/contexLoginRegister";
import { StyledButton } from "../../../styles/Button";
import { Input } from "../../../styles/Input";
import { postSchema } from "./formSchema";

interface iAdmNewColectionsFormValues {
  userId: number;
  name: string;
  series: [];
}

export const AdmNewColectionForm = () => {
  const { createNewColectionRequest } = useContext(LoginRegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iAdmNewColectionsFormValues>({
    mode: "onChange",
    resolver: yupResolver(postSchema),
  });

  const onSubmit: SubmitHandler<iAdmNewColectionsFormValues> = (data) => {
    createNewColectionRequest(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          className="input"
          label="Create New Colection"
          type="text"
          placeholder=""
          register={register("name")}
        />
        {errors ? <span>{errors.name?.message}</span> : ""}

        <StyledButton buttonSize="default" buttonStyle="primary" type="submit">
          Enviar
        </StyledButton>
      </form>
    </div>
  );
};
