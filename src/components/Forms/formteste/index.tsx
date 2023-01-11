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

interface iUserTesteFormValues {
  name: string;
}

export const Teste = () => {
  const { cards, setCards, countadd, setCountadd, addColectionId, setAddColectionId, setModalOn, modalOn } =
    useContext(DashboardContext);
  
  // console.log(cards);
  
  
  const { user, setUser } = useContext(LoginRegisterContext)

  const { register, handleSubmit } = useForm<iUserTesteFormValues>();

  const onSubmit = async (data: iUserTesteFormValues) => {
    const filterName = cards.filter((ele) => {
      const filter = ele.series?.filter((el) => {
        // console.log(addColectionId);
        
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
        setCountadd(countadd+1)

      } catch (error) {
        console.log(error);
      }
    }
    setAddColectionId(null);
    // reset();
    setModalOn(!modalOn)
    console.log("oi");
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        // label="Create New Serie"
        type="text"
        placeholder=""
        {...register("name")}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};
