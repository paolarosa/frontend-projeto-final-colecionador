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

interface iAdmNewElementFormValues {
  image: string;
  title: string;
  author: string;
  published: number;
  description: string;
}

export const AdmNewElementForm = () => {
  const { user, createNewColectionRequest } = useContext(LoginRegisterContext);

  const {
    cards,
    countadd,
    setCountadd,
    addColectionId,
    setAddColectionId,
    elementModal,
    setElementModal,
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

  const onSubmit: SubmitHandler<iAdmNewElementFormValues> = async (data) => {
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

    const series = filterName[0].series;

    console.log(series);

    if (series) {
      const filterSerie = series.filter((ele) => {
        return ele.name === addColectionId;
      });

      const filterNotSerie = series.filter((ele) => {
        return ele.name !== addColectionId;
      });

      const colection = filterSerie[0].colection;

      if (colection) {
        const newColection = {
          userId: user?.id,
          ...filterName[0],
          series: [
            ...filterNotSerie,
            { ...filterSerie[0], colection: [...colection, data] },
          ],
        };
       
        console.log(newColection);

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
      setElementModal(!elementModal);
    }

    console.log(filterName);
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
