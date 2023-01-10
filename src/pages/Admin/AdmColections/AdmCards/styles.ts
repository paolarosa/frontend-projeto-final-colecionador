import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const CardStyled = styled.li`
  display: flex;
  width: 90%;
  min-width: 100px;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;

  background-color: ${theme.colors.grey1};
  border-radius: 10px;

  .elementTitle {
  }

  .elementButtons {
    display: flex;
    gap: 20px;
  }
`;
