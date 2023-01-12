import styled, { css } from "styled-components";
import image from "../../assets/hq.jpg";
import { theme } from "../../styles/theme";
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
  padding: 10px;
  .divButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 150px;
    position: relative;
  }
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
          background: ${theme.colors.secundary2}; ;
        `;
      case "Books":
        return css`
          background: ${theme.colors.primary};
        `;
      case "Rooms":
        return css`
          background: ${theme.colors.pink};
        `;
      case "Comics":
        return css`
          background: ${theme.colors.green};
        `;
      case "TCG":
        return css`
          background: ${theme.colors.red};
        `;
    }
  }}
  border: 4px solid black;
  box-shadow: 5px 8px 0px ${theme.colors.white},
    5px 8px 0px 2px ${theme.colors.black}, 10px 20px 0px ${theme.colors.white},
    10px 20px 5px 0px ${theme.colors.black}, 15px 20px 0px ${theme.colors.white},
    10px 20px 20px 10px ${theme.colors.black},
    23px 30px 0px ${theme.colors.white},
    10px 30px 30px 20px ${theme.colors.black};
  div {
    position: relative;
    width: 1100px;
    margin-left: 30px;
    margin-bottom: 20px;
  }
  div:nth-child(odd) ul,
  div:nth-child(odd) h2 {
    background-color: ${theme.colors.grey0};
  }
  div:nth-child(even) ul,
  div:nth-child(even) h2 {
    background-color: ${theme.colors.grey1};
  }
  h2 {
    font-size: ${theme.typography.Heading3.size};
    width: 96%;
    height: 50px;
    padding: 10px 0 0 15px;
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
    box-shadow: 1px 5px 5px ${theme.colors.grey3},
      1px 1px 0px 0px ${theme.colors.grey3};
  }
  *::-webkit-scrollbar {
    height: 16px;
  }
  *::-webkit-scrollbar-track {
    background: ${theme.colors.grey0};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.black};
    border-radius: 10px;
    border: 3px solid ${theme.colors.white};
  }
  .button-scroll {
    width: 50px;
    position: absolute;
    right: 0px;
    top: 100px;
    background: ${theme.colors.white};
  }
  .button-scroll img {
    width: 30px;
    height: 30px;
    margin: 20px;
  }
  @media (max-width: 1024px) {
    div {
      width: 100vw;
    }
    h2 {
      width: 80%;
    }
    ul {
      width: 80%;
    }
    .button-scroll {
      position: absolute;
      right: 40px;
    }
  }
  @media only screen and (min-width: 453px) and (max-width: 1024px) {
    div {
      width: 100vw;
    }
    h2 {
      width: 90%;
    }
    ul {
      width: 90%;
    }
    .button-scroll {
      position: absolute;
      right: 50px;
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
export const MenuButtons = styled.ul<iActivedButton>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin-top: 40px;
  height: 90px;
  overflow-x: auto;
  position: absolute;
  bottom: -25px;
  border-bottom: none;
  padding-left: 15px;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.black};
    border-radius: 10px;
    border: 3px solid transparent;
  }
  li {
    width: 222px;
    min-width: 222px;
    border-bottom: none;
    display: block;
    background: ${theme.colors.white};
    padding: 10px;
    text-align: center;
    border-radius: 30px 0px 0px 0px;
    border: solid 4px ${theme.colors.black};
    cursor: pointer;
    font-size: ${theme.typography.Caption.size};
  }
  li:hover {
    transform: scale(1.14, 1.24);
    background-position: -60px;
    border-bottom: none;
  }
  li:nth-child(1) {
    background-color: ${theme.colors.secundary2};
    ${(props) => props.actived === "All" && categoryActived}
  }
  li:nth-child(2) {
    background-color: ${theme.colors.primary};
    ${(props) => props.actived === "books_colections" && categoryActived}
  }
  li:nth-child(3) {
    background-color: ${theme.colors.pink};
    ${(props) => props.actived === "rooms" && categoryActived}
  }
  li:nth-child(4) {
    background-color: ${theme.colors.green};
    ${(props) => props.actived === "comics" && categoryActived}
  }
  li:nth-child(5) {
    background-color: ${theme.colors.red};
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
      width: 100px;
      padding-top: 5px;
      border: 2px solid ${theme.colors.black};
      border-radius: 20px 20px 0px 20px;
    }
    li:nth-child(2) {
      width: 140px;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
    overflow-x: scroll;
    border-bottom: none;
  }
  li {
    height: 50px;
  }
`;
const categoryActived = css`
  transform: scale(1.14, 1.25);
  background-position: -60px;
  border-bottom: none;
`;