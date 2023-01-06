import * as yup from "yup";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { DivDogBallon, PageLogin } from "./styles";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import dog from "../../assets/Cosmo.png";
import background from "../../assets/background.png";

export interface UserFormData {
  email: string;
  password: string;
}

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
  });

  const { loginRequisition,passwordEye, setPasswordEye }: any = useContext(LoginRegisterContext);

  const { register, handleSubmit, formState: { errors }} = useForm<UserFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <PageLogin>
      <section>
        <form onSubmit={handleSubmit(loginRequisition)}>
          <div>
            <h2>Login</h2>
          </div>
          <label>Email</label>
          <input type={"email"} {...register("email")} />
          {errors ? <span>{errors.email?.message}</span> : ""}
          <label>Senha</label>
          <div className="password">
            <input type={passwordEye? ("text"):("password")} {...register("password")} />
            <span onClick={()=>setPasswordEye(!passwordEye)}> {passwordEye? (<AiFillEyeInvisible/>):(<AiFillEye/>)} </span>
            </div>
          {errors ? <span>{errors.password?.message}</span> : ""}
          <button type="submit">Entrar</button>
        </form>
        <p>
          Não tem uma conta? Clique <Link to={"/register"}>aqui</Link>
        </p>
      </section>
      <DivDogBallon>
        <div>
          <div className="baloonText">
            Não tem uma conta? Clique <Link to={"/register"}>aqui</Link>
          </div>
          <img className="dog" alt="" src={dog} />
        </div>
      </DivDogBallon>
      <img className="background" alt="" src={background} />
    </PageLogin>
  );
};

export default Login;
