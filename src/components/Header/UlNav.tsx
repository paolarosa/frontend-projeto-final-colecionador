import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Ul: any = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  li {
    padding: 0 10px;
    border: 1px solid transparent;
    color: #363636;
  }

  li:hover {
    display: flex;
    height: 40px;
    width: 90%;
    border: 1px solid yellow;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: black;
    transition: 1s;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    border: 2px solid black;
    border-radius: 10px;
    position: fixed;
    transform: ${(props: any) =>
      props.burger ? "translateX(0)" : "translateX(100%)"};
    top: 55px;
    right: 0;
    height: 80vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    ul {
      display: flex;
      gap: 20px;
    }

    li {
      display: flex;
      height: 40px;
      width: 90%;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      color: #363636;
      border: none;
      border-bottom: 1px solid transparent;
      transition: 3s;
    }

    li:hover {
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      background-color: #49BCF0;
      transition: 3s;
    }
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
      <li>Archivements</li>
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
