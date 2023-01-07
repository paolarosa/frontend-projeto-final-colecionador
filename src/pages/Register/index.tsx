import * as yup from "yup";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { DivDogBallon, PageRegister } from "./styles";

import dog from "../../assets/Cosmo.png";
import background from "../../assets/background.png";
import { StyledButton } from "../../styles/Button";
import { Input } from "../../styles/Input";

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
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas diferentes")
      .required("Senha Obrigatório"),
  });

  const { registerRequisition, loading } = useContext(LoginRegisterContext);

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
    // reset();
  };

  return (
    <PageRegister>
      <section>
        <form onSubmit={handleSubmit(registerRequisition)}>
          <div>
            <h2>Cadastre-se</h2>
          </div>

          {/* <label>Nome</label>
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

          <button type="submit">Entrar</button> */}

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
