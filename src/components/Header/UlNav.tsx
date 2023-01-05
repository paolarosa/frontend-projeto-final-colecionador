import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Ul: any = styled.ul`
  width: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  position: fixed;
  top: 55px;
  right: 0;

  transform: ${(props: any) =>
  props.burger ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;

  border: 2px solid black;
  border-radius: 10px;

  li {
    border: 1px solid transparent;
    color: #363636;
    padding: 5px;
  }

  li:hover {
    border: 1px solid yellow;
    border-radius: 10px;
    justify-content: center;
    color: black;
    transition: 1s;
  }
`;

const UlNav: any = ({ burger }: any) => {
  const navigate = useNavigate();

  return (
    <Ul burger={burger}>
      <li>
        <Link to={"/user"}>Profile</Link>
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
