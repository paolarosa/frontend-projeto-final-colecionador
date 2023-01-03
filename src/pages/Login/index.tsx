import { Link, PageLogin } from "./styles";
import background from "../../assets/background.png";
import collector from "../../assets/colecionador.png";
import dog from "../../assets/Cosmo.png";

const Login = () => {
  return (
    <PageLogin>
      <img className="collector" alt="" src={collector} />
      <form /* onSubmit={handleSubmit(loginRequisition)} */>
        <div>
          <h2>Login</h2>
        </div>
        <label>Email</label>
        <input />
        <label>Senha</label>
        <input />
        <button type="submit">Entrar</button>
        <p>
          Não possui uma conta? Clique <Link to={"/register"}>aqui</Link>!
        </p>
      </form>
      <div className="baloonText">
        Não tem uma conta? Clique <Link to={"/register"}>aqui</Link>
      </div>
      <img className="dog" alt="" src={dog} />
      <img className="background" alt="" src={background} />
    </PageLogin>
  );
};

export default Login;
