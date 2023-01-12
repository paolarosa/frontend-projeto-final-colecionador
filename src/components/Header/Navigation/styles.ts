import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Ul: any = styled.ul`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 75px;
  right: 0px;
  color: ${theme.colors.grey0};
  background-color: ${theme.colors.secundary};
  z-index: 10;
  padding-top: 100px;
  button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      height: max-content;
      color: ${theme.colors.grey0};
      font-size: 1.6rem;
      margin-bottom: 10px;
    }


  transform: ${(props: any) =>
  props.burger ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;

  border: 2px solid black;
  border-radius: 10px;
  .imgPerfil{
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      object-fit: cover;
      border: 2px solid ${theme.colors.primary};
      margin-top: 5px;
      position: fixed;
      top: 0;
      img{
        width: 100px;
        height: 90px;
      }
    }

  button:hover{
    text-shadow: 1px 0px 20px #FFFFFF, 1px 0px 20px #FFFFFF;
  }
  li:hover {
    text-shadow: 1px 0px 20px #FFFFFF, 1px 0px 20px #FFFFFF;
  }

  @media (min-width: 1024px){
    width: max-content;
    position: static;
    gap: 20px;
    font-size: 1.2rem;
    font-weight: 500;
    flex-direction: row;
    background-color: transparent;
    transform: none;
    border: none;
    padding-top: 0px;
    button{
      margin-bottom: 0px;
    }
    .imgPerfil{
      position: relative;
      width: 50px;
      height: 50px;
      img{
        width: 100px;
        height: 55px;
      }
    }
  }
`;