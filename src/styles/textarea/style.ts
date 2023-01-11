import styled from "styled-components";
import { theme } from "../theme";

export const TextareaStyled = styled.div`
  .label-content {
    position: relative;
    margin-bottom: 9px;
  }

  .label {
    color: ${theme.colors.grey3};
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

  .textarea {
    font-size: 16px;
    display: block;
    width: 100%;
    height: 140px;
    padding: 20px;
    background: ${theme.colors.grey0};
    color: ${theme.colors.grey4};
    border: 1px solid ${theme.colors.grey4};
    border-radius: 20px;
    box-sizing: border-box;
    &:focus {
      outline: none;
      ~ .label {
        background-color: ${theme.colors.white};
        /* position: relative; */
        top: -8px;
        font-size: 12px;
      }
      background: ${theme.colors.white};
      color: ${theme.colors.grey4};
      border: 1px solid ${theme.colors.grey4};
    }
  }
`;
