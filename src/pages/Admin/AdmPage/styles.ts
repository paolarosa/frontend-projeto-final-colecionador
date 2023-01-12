import styled from "styled-components";
import { theme } from "../../../styles/theme";

const StyledAdminPage = styled.div`
  display: flex;
  
  .admControlMenu {
    background-color: ${theme.colors.grey2};
    margin-right: 10px;

    .admControlLogo {
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.grey2};
        padding: 20px;
        border-radius: 10%;
        margin-bottom: 20px;
      }
    }

    .admControlButtonsMenu {
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: space-between;

      .upButtons {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 20px;
        background-color: ${theme.colors.grey2};
      }

      .bottomButtons {
        display: flex;
        padding: 20px;
      }
    }
  }

  .admBoardMenu {
    display: flex;
    margin: auto;

    .background {
      width: 100%;
      height: 100%;
      object-fit: cover;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

  }

  .underConstruction {
    color: red;
    font-size: ${theme.typography.Heading1.size};
  }
  
  .textUncerConstruction {
    text-decoration: line-through red 2px;
  }
`;

export default StyledAdminPage;
