import styled, { css } from "styled-components";
import image from "../../assets/hq.jpg";

interface iActivedButton {
  actived: string;
}

export const ContainerDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const DashboardStyled = styled.div<iActivedButton>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1140px;
  padding-top: 30px;
  gap: 50px;
  ${(props) => {
    switch (props.actived) {
      case "All":
        return css`
          background: #9de0ff;
        `;
      case "books_colections":
        return css`
          background: #ffcd07;
        `;
      case "rooms":
        return css`
          background: #da77f2;
        `;
      case "comics":
        return css`
          background: #69db7c;
        `;
      case "card_game":
        return css`
          background: #ff6b6b;
        `;
    }
  }}
  border: 5px solid black;
  box-shadow: 5px 8px 0px #fff, 5px 8px 0px 2px #000, 10px 20px 0px #fff,
    10px 20px 5px 0px #000, 15px 20px 0px #fff, 10px 20px 20px 10px #000,
    23px 30px 0px #fff, 10px 30px 30px 20px #000;

  div {
    position: relative;
    width: 1100px;
    margin-left: 30px;
    margin-bottom: 20px;
  }

  div:nth-child(odd) ul,
  div:nth-child(odd) h2 {
    background-color: #f8f9fa;
  }

  div:nth-child(even) ul,
  div:nth-child(even) h2 {
    background-color: #d9d9d9;
  }

  h2 {
    font-size: 26px;
    /*  background-color: #ffcd07; */
    /* width: 250px; */
    width: 96%;
    height: 50px;
    padding: 10px 0 0 15px;
    /*  border-top-right-radius: 50px; */
    /* border-top-left-radius: 30px; */
    /* box-shadow: 0px 2px 2px #868e96, 0px 0px 5px 0px #868e96; */
  }

  ul {
    overflow-x: auto;
    overflow-y: hidden;
    width: 96%;
    position: relative;
    height: 250px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    padding-left: 30px;
    background-color: #cff0ff;
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
    background-color: #000000;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

  .button-scroll {
    /*   padding: 10px;
    box-shadow: 2px -2px 0 1px #000 inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(220deg); */
    width: 50px;
    position: absolute;
    right: 0px;
    top: 100px;
    background: white;
  }
  .button-scroll img {
    width: 30px;
    height: 30px;
    margin: 20px;
  }
  /* .scroll-none {
    display: none;
  } */
  @media (max-width: 1024px) {
    div {
      width: 100vw;
    }
    h2 {
      width: 90vw;
    }
    ul {
      width: 90vw;
    }
    .button-scroll {
      width: 50px;
      position: absolute;
      right: 0;
      top: 100px;
      background: white;
    }
  }
`;

export const BackgroundDash = styled.div`
  width: 100vw;
  height: 100%;

  position: fixed;
  top: 0;
  z-index: -1;

  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 20%;
`;

export const MenuButtons = styled.div<iActivedButton>`
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
    border-radius: 30px 0px 0px 0px;
    border: solid black 5px;
    cursor: pointer;
    font-size: 16px;
  }

  li:hover {
    transform: scale(1.14, 1.24);
    background-position: -60px;
    border-bottom: none;
  }

  li:nth-child(1) {
    background-color: #9de0ff;
    ${(props) => props.actived === "All" && categoryActived}
  }

  li:nth-child(2) {
    background-color: #ffcd07;
    ${(props) => props.actived === "books_colections" && categoryActived}
  }
  li:nth-child(3) {
    background-color: #da77f2;
    ${(props) => props.actived === "rooms" && categoryActived}
  }
  li:nth-child(4) {
    background-color: #69db7c;
    ${(props) => props.actived === "comics" && categoryActived}
  }
  li:nth-child(5) {
    background-color: #ff6b6b;
    ${(props) => props.actived === "card_game" && categoryActived}
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    li {
      font-size: 10px;
      height: 30px;
      width: 80px;
      padding-top: 5px;
      border: 2px solid black;
      border-radius: 20px 20px 0px 20px;
    }
  }
`;

const categoryActived = css`
  transform: scale(1.14, 1.24);
  background-position: -60px;
  border-bottom: none;

  @media (max-width: 1024px) {
    border-bottom: 2px solid black;
  }
`;
