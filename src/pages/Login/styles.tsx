import styled from "styled-components";

export const PageLogin = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;

  .password{
    width: 100%;
    position: relative;
    span{
      position: absolute;
      right: 20px;
      top: 10px;
      cursor: pointer;
    }
    input{
      width: 100%;
    }
  }

  section {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    padding: 20px 10px;
    margin: 0 auto;

    border-top: 4px solid #000000;
    border-right: 2px solid #000000;
    border-bottom: 2px solid #000000;
    border-left: 4px solid #000000;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 8px 8px 20px #f9f41f, 5px 5px 0px 2px #f9f41f;

    form {
      display: flex;
      flex-direction: column;

      padding: 5px;
      gap: 15px;

      font-size: 18px;

      input {
        background-color: #dddddd;
        border: none;
        border-radius: 30px;
        height: 40px;
      }

      button {
        height: 50px;
        border: none;
        border-radius: 30px;
        background-color: #f9f41f;
        box-shadow: 4px 4px 0px #000, 4px 4px 0px 1px #000;
      }
    }

    p {
      display: inline-block;
      margin-top: 30px;
      align-self: center;
    }
  }

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  a {
    color: #49bcf0;
  }

  @media (min-width: 1024px) {
    width: 968px;
    justify-content: space-between;
    margin: 0 auto;

    section {
      width: 500px;
      margin: 0;
    }
  }
`;

export const DivDogBallon = styled.div`
  display: none;

  div {
    .dog {
      width: 300px;
    }

    .baloonText {
      width: 200px;
      display: block;

      position: absolute;
      top: 0;
      left: -30px;

      background: white;
      padding: 15px;

      font-size: 24px;
      text-align: center;

      border-radius: 40px 40px 0px 40px;
      border: solid black 3px;

      a {
        color: #49bcf0;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    position: relative;
  }
`;
