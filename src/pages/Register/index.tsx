import { DivDogBallon, PageRegister } from "./styles";
import background from "../../assets/background.png";
import dog_voando from "../../assets/Cosmo_voando.png";
import collector from "../../assets/collector.png";
import * as yup from "yup";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { StyledButton } from "../../styles/Button";
import { Input } from "../../styles/Input";

export interface UserFormData {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  avatar: string;
}

const Register = () => {
  
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
    name: yup.string().required("Nome obrigatorio"),
    avatar: yup.string().required("Avatar ovrigatorio"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas diferentes")
      .required("Senha Obrigatório"),
  });


  const { registerRequisition, loading, saveAvatares } = useContext(LoginRegisterContext);
  const [imgSelect, setImgSelect] = useState ("https://mir-s3-cdn-cf.behance.net/project_modules/disp/fd44d538650505.598fa11957245.jpg")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    registerRequisition(data);
  };
  return (
    <PageRegister>
      <section>
        <div className="avatarForm">
          <img src={imgSelect} alt="" />
        </div>
        <form onSubmit={handleSubmit(registerRequisition)}>
          <div>
            <h2>Cadastre-se</h2>
          </div>
          <Input
            className="input"
            label="Nome"
            id="name"
            type="text"
            placeholder=""
            register={register("name")}
            disabled={loading}
          />
          <span>{errors.name?.message}</span>

          <Input
            className="input"
            label="Email"
            id="email"
            type="email"
            placeholder=""
            register={register("email")}
            disabled={loading}
          />
          <span>{errors.email?.message}</span>

          <Input
            className="input"
            label="Senha"
            id="password"
            type="password"
            placeholder=""
            register={register("password")}
            disabled={loading}
          />
          <span>{errors.password?.message}</span>

          <Input
            className="input"
            label="Confirmar Senha"
            type="password"
            placeholder=""
            register={register("confirmpassword")}
            disabled={loading}
          />
          <span>{errors.confirmpassword?.message}</span>

          <div className="avatares">
            <select  id="avatar"  placeholder="avartar" onClick={(e:any)=>setImgSelect(e.target.value)} {...register("avatar")}>
              <option value="" disabled selected>Selecione...</option>
              {saveAvatares.map((element)=>{

                return(
                  <option value={element.image}>{element.name}</option>
                )
              })}
            </select>
            <label htmlFor="avatar">Avatares</label>
          </div>

          <StyledButton
            buttonSize="default"
            buttonStyle="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Cadastrando ..." : "Cadastrar"}
          </StyledButton>
        </form>
      </section>
      <DivDogBallon>
        <div className="image">
          <div className="baloonText">
            Já Possui uma conta? Clique <Link to={"/login"}>aqui</Link>
          </div>
          <img className="dog" alt="" src={dog_voando} />
          <img className="collector" alt="" src={collector} />
        </div>
      </DivDogBallon>
      <img className="background" alt="" src={background} />
    </PageRegister>
  );
};

export default Register;
