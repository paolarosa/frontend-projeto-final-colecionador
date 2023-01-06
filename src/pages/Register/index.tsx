import * as yup from "yup";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { DivDogBallon, PageRegister } from "./styles";

import dog from "../../assets/Cosmo.png";
import background from "../../assets/background.png";

export interface UserFormData {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
}

const Register = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
    name: yup.string().required("Nome obrigatorio"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Senhas diferentes").required("Senha Obrigatório"),
  });

  const { registerRequisition }: any = useContext(LoginRegisterContext);

  const { register, handleSubmit, formState: { errors }} = useForm<UserFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <PageRegister>
      <section>
        <form onSubmit={handleSubmit(registerRequisition)}>
          <div>
            <h2>Cadastre-se</h2>
          </div>

          <label>Nome</label>
          <input type={"text"} {...register("name")} />
          {errors ? <span>{errors.name?.message}</span> : ""}

          <label>Email</label>
          <input type={"email"} {...register("email")} />
          {errors ? <span>{errors.email?.message}</span> : ""}

          <label>Senha</label>
          <div className="password">
            <input type={"password"} {...register("password")} />
            </div>
            {errors ? <span>{errors.password?.message}</span> : ""}

            <label> Confirmar Senha</label>
          <div className="password">
            <input type={"password"} {...register("confirmpassword")} />
            </div>
            {errors ? <span>{errors.confirmpassword?.message}</span> : ""}

          <button type="submit">Entrar</button>
        </form>
        <p>
          Já Possui uma conta? Clique <Link to={"/login"}>aqui</Link>
        </p>
      </section>
      <DivDogBallon>
        <div>
          <div className="baloonText">
          Já Possui uma conta? Clique <Link to={"/login"}>aqui</Link>
          </div>
          <img className="dog" alt="" src={dog} />
        </div>
      </DivDogBallon>
      <img className="background" alt="" src={background} />
    </PageRegister>
  );
};

export default Register;