import styled from "styled-components";
import image from "../../assets/background.png";

export const ContainerDash = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 50px;
  gap: 50px;

  div {
    width: 1110px;
  }

  div:nth-child(odd) ul,
  div:nth-child(odd) h2 {
    background-color: #cceeff;
  }

  div:nth-child(even) ul,
  div:nth-child(even) h2 {
    background-color: #ffe484;
  }

  h2 {
    font-size: 20px;
    background-color: #d9d9d9;
    width: 250px;
    height: 50px;
    padding: 10px 0 0 15px;
    border-top-right-radius: 50px;
    border-top-left-radius: 30px;
    box-shadow: 0px 2px 2px #868e96, 0px 0px 5px 0px #868e96;
  }

  ul {
    overflow-x: auto;
    width: 100%;
    height: 200px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    padding-left: 10px;
    background-color: #d9d9d9;
    /* border-top-right-radius: 10px; */
    box-shadow: 1px 5px 5px #868e96, 1px 1px 0px 0px #868e96;
  }

  *::-webkit-scrollbar {
    height: 16px;
  }

  *::-webkit-scrollbar-track {
    background: rgb(255, 255, 255, 0.5);
  }

  *::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .button-scroll {
    padding: 10px;
    box-shadow: 2px -2px 0 1px #000 inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
  }

  .button-scroll-back {
    padding: 10px;
    box-shadow: 2px -2px 0 1px #000 inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(220deg);
  }

  /* .scroll-none {
    display: none;
  } */
  @media (max-width: 1024px) {
    ul {
      width: 100%;
    }
  }
`;

export const BachgroundDash = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  z-index: -1;
  
  background-image: url(${image});
  background-size: cover;

  opacity: 50%;
`;

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  li {
    width: 222px;
    display: block;
    background: white;
    padding: 10px;
    text-align: center;
    border-radius: 20px 30px 0px 20px;
    border: solid black 3px;
    cursor: pointer;
    font-size: 16px;
  }

  li:hover {
    background: #d9d9d9;
    transform: scale(1.1);
    background-position: -60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  @media (max-width: 1024px) {
    background-color: red;
    width: 100%;
    li {
      width: 20%;
      padding: 0;
      background: red;
    }
  }
`;
