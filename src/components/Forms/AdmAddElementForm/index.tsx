import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginRegisterContext } from "../../../contexts/contexLoginRegister";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { StyledButton } from "../../../styles/Button";
import { Input } from "../../../styles/Input";
import { Textarea } from "../../../styles/textarea";
import { postSchema } from "./formSchema";

interface iAdmNewElementFormValues {
  image: string;
  title: string;
  author: string;
  published: number;
  description: string;
}

export const AdmNewElementForm = () => {
  const { createNewColectionRequest } = useContext(LoginRegisterContext);

  const {
    cards,
    countadd,
    setCountadd,
    addColectionId,
    setAddColectionId,
    setModalOn,
    modalOn,
  } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iAdmNewElementFormValues>({
    mode: "onChange",
    resolver: yupResolver(postSchema),
  });

  const onSubmit: SubmitHandler<iAdmNewElementFormValues> = (data) => {
    // const filterName = cards.filter((ele) => {
    //   const filter = ele.colections?.filter((el) => {
    //     return el.title === addColectionId;
    //   });

    //   if (filter) {
    //     if (filter.length > 0) {
    //       return ele;
    //     }
    //   }
    // });

    // const newData = {
    //   ...data,
    //   id: cards.length + 1,
    // };
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          className="input"
          label="Image"
          type="text"
          placeholder=""
          register={register("image")}
        />
        {errors ? <span>{errors.image?.message}</span> : ""}

        <Input
          className="input"
          label="Title"
          type="text"
          placeholder=""
          register={register("title")}
        />
        {errors ? <span>{errors.title?.message}</span> : ""}

        <Input
          className="input"
          label="Author"
          type="text"
          placeholder=""
          register={register("author")}
        />
        {errors ? <span>{errors.author?.message}</span> : ""}

        <Input
          className="input"
          label="Published"
          type="number"
          placeholder=""
          register={register("published")}
        />
        {errors ? <span>{errors.published?.message}</span> : ""}

        <Textarea
          className="textarea"
          label="Description"
          name="description"
          id="description"
          cols={30}
          rows={14}
          register={register("description")}
        />
        {errors ? <span>{errors.description?.message}</span> : ""}

        <StyledButton buttonSize="default" buttonStyle="primary" type="submit">
          Enviar
        </StyledButton>
      </form>
    </div>
  );
};
