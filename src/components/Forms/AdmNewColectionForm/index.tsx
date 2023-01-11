import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginRegisterContext } from "../../../contexts/contexLoginRegister";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { StyledButton } from "../../../styles/Button";
import { Input } from "../../../styles/Input";
import AdmModal from "../../Modals/AdmModalAddSerie";
import { postSchema } from "./formSchema";

interface iAdmNewColectionsFormValues {
  userId: number;
  name: string;
  series: [];
}

export const AdmNewColectionForm = () => {
  const { createNewColectionRequest } = useContext(LoginRegisterContext);
  const { setModalOn, modalOn, setAddColectionId } = useContext(DashboardContext);
  const [showModalSerie, setShowModalSerie] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iAdmNewColectionsFormValues>({
    mode: "onChange",
    resolver: yupResolver(postSchema),
  });

  const onSubmit: SubmitHandler<iAdmNewColectionsFormValues> = async (data) => {
    const response = await createNewColectionRequest(data);
    
    setAddColectionId(response.data)
    setShowModalSerie(true)
    // reset();
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
      {showModalSerie && (<AdmModal onCustomClose={() => setShowModalSerie(false)}/>)}
      
    </div>
  );
};
