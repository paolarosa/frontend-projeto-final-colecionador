import styled from "styled-components";
import image from "../../assets/hq.jpg";

export const ContainerDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 100%;
  width: 100%;
  max-width: 1140px;
  /* margin-top: 50px; */
  padding-top: 30px;
  gap: 50px; 
  background: white;

  /*  padding: 20px; */

  /* border-top-left-radius: 30px; */
  border: 5px solid black;
  box-shadow: 5px 8px 0px #fff, 5px 8px 0px 2px #000, 10px 20px 0px #fff,
    10px 20px 5px 0px #000, 15px 20px 0px #fff, 10px 20px 20px 10px #000,
    23px 30px 0px #fff, 10px 30px 30px 20px #000;;

  div {
    background-color: #cff0ff;
    position: relative;
    /* width: 1120px; */
  }
  /*   div:nth-child(odd) ul {
    background-color: #cff0ff;
  }
  div:nth-child(odd) h2 {
    background: #ffcd07;
  }
  div:nth-child(even) ul,
  div:nth-child(even) h2 {
    background-color: #cff0ff;
}*/

  h2 {
    font-size: 20px;
   /*  background-color: #ffcd07; */
    width: 250px;
    height: 50px;
    padding: 10px 0 0 15px;
    /*  border-top-right-radius: 50px; */
    /* border-top-left-radius: 30px; */
    box-shadow: 0px 2px 2px #868e96, 0px 0px 5px 0px #868e96;
  }

  ul {
    overflow-x: auto;
    width: 100%;
    height: 250px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
padding-left: 30px;

    background-color: background-color: #cff0ff;
    /* border-top-right-radius: 10px; */
    box-shadow: 1px 5px 5px #868e96, 1px 1px 0px 0px #868e96;
  }
  span {
    border: 8px solid #333333;
    width: 40px;
    position: absolute;
    top: 0;
    left: -40px;
    z-index: 5;
    height: 100px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    box-shadow: 0px 15px 10px #000000, 0px 0px 0px 0px #000000, 
    0px -10px 0px #FFFFFF, 0px 8px 0px 0px #000

    
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
    div {
      width: 100vw;
    }
    ul {
      width: 100%;
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
    border-radius: 30px 0px 0px 0px;
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
  li:nth-child(odd) {
    background-color: #9de0ff;
  }

  li:nth-child(even) {
    background-color: #ffcd07;
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    li {
      font-size: 10px;
      height: 30px;
      width: 150px;
      padding-top: 5px;
      border: 2px solid black;
      border-radius: 20px 20px 0px 20px;
    }
  }
`;
