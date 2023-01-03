import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

interface isStyledLink {}

export const PageLogin = styled.div`
  /*   background-image: url("../../assets/background.png");
  background-size: cover; */
  height: 500px;

  form {
    height: 380px;
    background-color: white;
    z-index: 1;
    border: 2px solid #000000;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 0 10px;
    align-items: flex-start;
    width: 90%;
    font-size: 18px;
    padding: 15px 10px 10px 20px;
    position: relative;
    top: 50px;
    gap: 15px;
    box-shadow: 8px 8px 20px #f9f41f, 5px 5px 0px 2px #f9f41f;
  }
  form div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  form input {
    background-color: #dddddd;
    border: none;
    border-radius: 30px;
    height: 40px;
    width: 95%;
  }
  form button {
    border: none;
    border-radius: 30px;
    width: 95%;
    height: 50px;
    background-color: #f9f41f;
    box-shadow: 4px 4px 0px #000, 4px 4px 0px 1px #000;
    margin-top: 10px;
  }
  form p {
    font-size: 16px;
    margin-top: 10px;
  }
  .background {
    position: absolute;
    top: 0;
    z-index: 0;
    object-fit: cover;
    height: 100vh;
    width: 100%;
  }
  .dog,
  .baloonText,
  .collector {
    display: none;
  }

  @media (min-width: 700px) {
    /*   display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;

    .collector {
      display: block;
      height: 800px;
      z-index: 1;
      margin-top: 500px;
    }
    form {
      width: 500px;
      height: 500px;
      margin-top: 150px;
      padding: 30px;
      gap: 20px;
      border-bottom-left-radius: 100px;
      border-top-right-radius: 100px;
      border-top: 4px solid black;
      border-left: 4px solid black;
      border-right: 2px solid black;
      border-bottom: 3px solid black;
    }
    form div h2 {
      margin-top: 30px;
      font-size: 36px;
    }

    form input {
      height: 50px;
    }
    form button {
      margin-top: 20px;
      font-size: 26px;
    }
    form p {
      display: none;
    }
    .dog {
      display: block;
      position: absolute;
      top: 580px;
      right: 320px;
      z-index: 1;
    }
    .baloon {
      position: absolute;
      top: 580px;
      right: 300px;
      z-index: 1;
    }
    .baloonText {
      display: block;
      font-size: 24px;
      text-align: center;
      background: white;
      padding: 15px;
      position: absolute;
      top: 650px;
      right: 600px;
      z-index: 2;
      width: 300px;
      height: 90px;
      border-radius: 40px 40px 0px 40px;
      margin-bottom: 1em;
      border: solid black 3px;
    }
  }
`;

export const Link = styled(LinkRouter)<isStyledLink>`
  color: #49bcf0;
`;