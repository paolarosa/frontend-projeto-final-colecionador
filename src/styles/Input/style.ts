import styled from "styled-components";
import { theme } from "../theme";

export const InputStyled = styled.div`
  .label-content {
    position: relative;
    margin-bottom: 9px;
  }

  .label {
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

  .input {
    font-size: 16px;
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    background: ${theme.colors.grey0};
    color: ${theme.colors.grey4};
    border: 1px solid ${theme.colors.grey0};
    border-radius: 10px;
    box-sizing: border-box;
    &:focus {
      outline: none;
      ~ .label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
      color: ${theme.colors.grey4};
      border: 1px solid ${theme.colors.secundary2};
    }

    &:invalid {
      ~ .label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.colorNegative};
    }

    &:focus:valid {
      ~ .label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
    }

    &:not(:placeholder-shown) {
      ~ .label {
        background-color: ${theme.colors.white};
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.grey0};
      color: ${theme.colors.grey4};
      border: 1px solid ${theme.colors.grey4};

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
`;
