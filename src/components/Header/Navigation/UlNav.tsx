import { Link, useNavigate } from "react-router-dom"
import { Ul } from "./styles";

const UlNav: any = ({ burger }: any) => {
  const navigate = useNavigate();

  return (
    <Ul burger={burger}>
      <li>
        <Link to={"/user"}>Profile</Link>
      </li>
      <li>
        <Link to={"/forum"}>Forum</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>Colections</Link>
      </li>
      <li>
        <Link to={"/achievement"}>Achievements</Link>
      </li>
      <li>
        <button
          onClick={() => {
            localStorage.removeItem("Token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </li>
    </Ul>
  );
};

export default UlNav;
