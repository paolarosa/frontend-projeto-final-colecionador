import styled, { css } from "styled-components";
import { theme } from "./theme";

export type buttonProps = {
  buttonSize?: string;
  buttonStyle?: string;
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  transition: 0.4s;
  cursor: pointer;
  font-size: ${theme.typography.Heading1.size};
  font-weight: ${theme.typography.Heading1.weight};
  line-height: ${theme.typography.Heading1.height};

  ${({ buttonSize }: buttonProps) => {
    switch (buttonSize) {
      case "medium":
        return css`
          padding: 0px 16px;
          height: 50px;
          border: none;
          border-radius: 30px;
        `;
      case "small":
        return css`
          padding: 0 1.75rem;
          height: 30px;
          width: 32px;
          border: none;
          border-radius: 30px;
          font-size: ${theme.typography.Caption.size};
        `;
      default:
        return css`
          padding: 0px 22px;
          height: 50px;
          width: 100%;
          border: none;
          border-radius: 30px;
        `;
              case "modal":
                return css`
                  padding: 0px 20px;
                  height: 50px;
                  border: none;
                  border-radius: 30px;
                `;
    }
  }};

  ${({ buttonStyle }: buttonProps) => {
    switch (buttonStyle) {
      case "primary":
        return css`
          background: ${theme.colors.primary06};
          color: ${theme.colors.black};
          border: 1px solid ${theme.colors.primary};
          -webkit-box-shadow: 1px 3px 3px 3px #000000; 
          box-shadow: 1px 3px 3px 3px #000000;
          &:hover {
           background-color: ${theme.colors.primary};
          }
        `;
      case "secundary":
        return css`
          background: ${theme.colors.secundary06};
          color: ${theme.colors.black};
          border: 1px solid ${theme.colors.secundary};
          -webkit-box-shadow: 1px 3px 3px 3px #000000; 
          box-shadow: 1px 3px 3px 3px #000000;
          
          &:hover {
            background: ${theme.colors.secundary};
          }
        `;
      case "disabled":
        return css`
          background: ${theme.colors.grey0};
          color: ${theme.colors.grey3};
          border: 1px solid ${theme.colors.grey0};
          box-shadow: 4px 4px 0px #000, 4px 4px 0px 1px #000;
          &:hover {
            background: ${theme.colors.grey3};
            border: 1px solid ${theme.colors.grey3};
            color: ${theme.colors.grey1};
          }
        `;
      default:
        return;
    }
  }};
`;
