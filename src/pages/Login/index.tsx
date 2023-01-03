import { DivDogBallon, PageLogin } from "./styles";
import background from "../../assets/background.png";
import dog from "../../assets/Cosmo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface UserFormData {
  email: string;
  password: string;
}

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
  });

  const { loginRequisition }: any = useContext(LoginRegisterContext);

  const { register, handleSubmit } = useForm<UserFormData>({
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
          <label>Senha</label>
          <input type="password" {...register("password")} />
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
