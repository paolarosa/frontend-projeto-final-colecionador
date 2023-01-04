import { DivDogBallon, PageLogin } from "./styles";
import background from "../../assets/background.png";
import collector from "../../assets/colecionador.png";
import dog from "../../assets/Cosmo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <PageLogin>
      <section>
        <form /* onSubmit={handleSubmit(loginRequisition)} */>
          <div>
            <h2>Login</h2>
          </div>
          <label>Email</label>
          <input />
          <label>Senha</label>
          <input />
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
