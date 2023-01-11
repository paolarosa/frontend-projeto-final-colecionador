import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageRegister = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;

  .password {
    width: 100%;
    position: relative;
    span {
      position: absolute;
      right: 20px;
      top: 10px;
      cursor: pointer;
    }
    input {
      width: 100%;
    }
  }

  .image {
  }

  section {
    position: relative;
    .avatarForm {
      width: 100px;
      height: 100px;
      background-color: ${theme.colors.secundary};
      border-radius: 50%;
      position: absolute;
      top: -40px;
      right: 40px;
      object-fit: cover;
      overflow: hidden;
      border: 2px solid ${theme.colors.secundary};
      -webkit-box-shadow: 0px -3px 9px -1px ${theme.colors.secundary};
      box-shadow: 0px -3px 9px -1px ${theme.colors.secundary};
      img {
        width: 100%;
      }
    }
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};

    padding: 20px 10px;
    margin: 0 auto;

    border-top: 4px solid ${theme.colors.black};
    border-right: 2px solid ${theme.colors.black};
    border-bottom: 2px solid ${theme.colors.black};
    border-left: 4px solid ${theme.colors.black};
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 8px 8px 20px ${theme.colors.primary}, 5px 5px 0px 2px ${theme.colors.primary};

    form {
      display: flex;
      flex-direction: column;

      padding: 5px;
      gap: 20px;

      font-size: ${theme.typography.Heading3.size};
    }

    h2 {
      display: inline-block;
      padding: 0 30px 30px 0;
      align-self: center;
    }
  }

  .avatares {
    position: relative;
    margin-bottom: 9px;

    select {
      font-size: ${theme.typography.Headline.size};
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
          font-size: ${theme.typography.Caption.size};
        }
        background: ${theme.colors.white};
        color: ${theme.colors.grey4};
        border: 1px solid ${theme.colors.grey4};
      }

      &:invalid {
        ~ label {
          background-color: ${theme.colors.white};
          top: -8px;
          font-size: ${theme.typography.Caption.size};
        }
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.colorNegative};
      }

      &:focus:valid {
        ~ label {
          background-color: ${theme.colors.white};
          top: -8px;
          font-size: ${theme.typography.Caption.size};
        }
        background: ${theme.colors.white};
      }

      &:not(:placeholder-shown) {
        ~ label {
          background-color: ${theme.colors.white};
          top: -8px;
          font-size: ${theme.typography.Caption.size};
        }
        background: ${theme.colors.white};
        color: ${theme.colors.grey4};
        border: 1px solid ${theme.colors.colorSucess};

        &:invalid {
          ~ .label {
            background-color: ${theme.colors.white};
            top: -8px;
            font-size: ${theme.typography.Caption.size};
          }
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.colorNegative};
        }
      }
    }
    label {
      color: ${theme.colors.grey2};
      font-size: ${theme.typography.Headline.size};
      font-weight: ${theme.typography.Headline.weight};
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
    color: ${theme.colors.secundary};
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

      background: ${theme.colors.white};
      padding: 15px;

      font-size: ${theme.typography.Heading1.size};
      text-align: center;

      border-radius: 40px 40px 40px 0px;
      border: solid ${theme.colors.black} 3px;

      a {
        color: ${theme.colors.secundary};
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    position: relative;
  }
`;
