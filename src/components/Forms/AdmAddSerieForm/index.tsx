import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginRegisterContext } from "../../../contexts/contexLoginRegister";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { apiBase } from "../../../services/api";
import { StyledButton } from "../../../styles/Button";
import { Input } from "../../../styles/Input";
import { Textarea } from "../../../styles/textarea";
import { postSchema } from "./formSchema";

interface iUserAddSerieFormValues {
  name: string;
}

export const AddSerieForm = () => {
  const {
    cards,
    countadd,
    setCountadd,
    addColectionId,
    setAddColectionId,
    setModalOn,
    modalOn,
  } = useContext(DashboardContext);

  const { user, setUser } = useContext(LoginRegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserAddSerieFormValues>({
    mode: "onChange",
    resolver: yupResolver(postSchema),
  });

  const onSubmit: SubmitHandler<iUserAddSerieFormValues> = async (data) => {
    const filterName = cards.filter((ele) => {
      const filter = ele.series?.filter((el) => {
        return el.name === addColectionId;
      });

      if (filter) {
        if (filter.length > 0) {
          return ele;
        }
      }
    });

    const newData = {
      ...data,
      id: cards.length + 1,
      colection: [],
    };

    console.log(filterName);
    const colections = filterName[0].series;

    if (colections) {
      const newColection = {
        userId: user?.id,
        ...filterName[0],
        series: [...colections, newData],
      };

      const token = localStorage.getItem("Token");
      try {
        const response = await apiBase.patch(
          `/colections/${filterName[0].id}`,
          newColection,

          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCountadd(countadd + 1);
      } catch (error) {
        console.log(error);
      }
    }
    setAddColectionId(null);
    // reset();
    setModalOn(!modalOn);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="input"
        label="Create New Serie"
        type="text"
        placeholder=""
        // {...register("name")}
        register={register("name")}
      />

      <StyledButton buttonSize="default" buttonStyle="primary" type="submit">
        Enviar
      </StyledButton>
    </form>
  );
};
