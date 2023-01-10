import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageRegister = styled.div`
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

  .image {
    
  }

  section {
    position: relative;
    .avatarForm{
      width: 100px;
      height: 100px;
      background-color: #49bcf0;
      border-radius: 50%;
      position: absolute;
      top: -40px;
      right: 40px;
      object-fit: cover;
      overflow: hidden;
      border: 2px solid #49bcf0;
      -webkit-box-shadow: 0px -3px 9px -1px #49BCF0; 
      box-shadow: 0px -3px 9px -1px #49BCF0;
      img{
        width: 100%;
      }
    }
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

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
      gap: 20px;

      font-size: 18px;

      /* input {
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
      } */
   }

   h2 {
      display: inline-block;
      padding: 0 30px 30px 0;
      align-self: center;
    }

  }

  .avatares{
    position: relative;
    margin-bottom: 9px;

    select{
      font-size: 16px;
      display: block;
      width: 100%;
      height: 40px;
      padding: 0 20px;
      background: ${theme.colors.grey0};
      color: ${theme.colors.grey4};
      border: 1px solid ${theme.colors.grey0};
      border-radius: 30px;
      box-sizing: border-box;
    &:focus {
      outline: none;
      ~ label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
      color: ${theme.colors.grey4};
      border: 1px solid ${theme.colors.grey4};
    }

    &:invalid {
      ~ label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.colorNegative};
    }

    &:focus:valid {
      ~ label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
    }

    &:not(:placeholder-shown) {
    ~ label {
      background-color: ${theme.colors.white};
      top: -8px;
      font-size: 12px;
    }
    background: ${theme.colors.white};
    color: ${theme.colors.grey4};
    border: 1px solid ${theme.colors.colorSucess};

    &:invalid {
      ~ .label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.colorNegative};
    }
  }
    }
    label {
    color: ${theme.colors.grey2};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 11px;
    padding: 0 5px;
    background: ${theme.colors.grey0};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
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
      display: block;

      position: absolute;
      top: -370px;
      left: -400px;

    }
    .collector {
      width: 300px;
      display: block;

      position: absolute;
      top: -50px;
      left: -260px;

    }

    .baloonText {
      width: 200px;
      display: block;

      position: absolute;
      top: -400px;
      left: -170px;

      background: white;
      padding: 15px;

      font-size: 24px;
      text-align: center;

      border-radius: 40px 40px 40px 0px;
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
`