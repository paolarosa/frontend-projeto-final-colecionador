import styled from "styled-components";
import { theme } from "../../../styles/theme";

const StyledAdmUsers = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 70vh;

  overflow-x: auto;

  gap: 50px;
  background-color: ${theme.colors.grey2};
  border-radius: 20px 20px 20px 20px;
  padding: 20px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    background-color: ${theme.colors.grey1};
    border-radius: 20px;
  }

  .mainAdmUserDiv {
    display: flex;
    gap: 20px;
    padding: 20px;
    align-items: center;
  }

  .aboutAll {
    display: flex;
    width: 100%;
    justify-content: space-around;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    div:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default StyledAdmUsers;
