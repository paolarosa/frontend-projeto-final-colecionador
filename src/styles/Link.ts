import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "./theme";

export type linkProps = {
  linksize?: string;
  linkstyle?: string;
};

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  transition: 0.4s;
  text-decoration: none;
  cursor: pointer;
  font-size: ${theme.typography.Headline.size};
  font-weight: ${theme.typography.Headline.weight};
  line-height: ${theme.typography.Headline.height};

  ${({ linksize }: linkProps) => {
    switch (linksize) {
      case "medium":
        return css`
          padding: 0px 16px;
          height: 32px;
        `;
      case "small":
        return css`
          padding: 0 1.75rem;
          height: 32px;
          width: 32px;
        `;
      default:
        return css`
          padding: 0px 22px;
          height: 48px;
          width: 100%;
        `;
    }
  }};

  ${({ linkstyle }: linkProps) => {
    switch (linkstyle) {
      case "primary":
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.primary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case "secundary":
        return css`
          background: ${theme.colors.grey3};
          color: ${theme.colors.grey0};
          border: 1px solid ${theme.colors.grey3};
          &:hover {
            background: ${theme.colors.grey2};
            border: 1px solid ${theme.colors.grey2};
          }
        `;
      case "disabled":
        return css`
          background: ${theme.colors.grey0};
          color: ${theme.colors.grey3};
          border: 1px solid ${theme.colors.grey0};
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
