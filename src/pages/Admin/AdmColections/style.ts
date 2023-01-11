import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const AdmMenuButtons = styled.div`
  display: flex;
  align-items: center;

  max-width: 950px;
  overflow-x: auto;

  padding: 20px;
  background-color: ${theme.colors.grey2};
  border-radius: 20px 20px 0 0;

  .AdmLiDivColections {
    display: flex;
    align-items: flex-start;
    width: 90%;
    max-width: 900px;
    height: 190px;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
    border-radius: 20px;
    border: 1px solid ${theme.colors.grey1};

    .AdmListColections {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-around;
      flex-wrap: wrap;
      /* border: 1px solid blue; */
    }
  }

  .AdmAddNewColectionBtn {
    display: flex;
    /* border: 1px solid blue; */
  }

  .AdmFormCreateColection {
    max-width: 900px;
  }

  li {
    display: block;
    text-align: center;

    border: solid black 1px;
    border-radius: 10px;
    font-size: ${theme.typography.Headline.size};
    background: ${theme.colors.grey1};
    padding: 10px 30px;

    cursor: pointer;
  }

  li:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey4};
  }

  li:focus-within {
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey4};
  }
`;

export const AdmDashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 950px;
  height: 60vh;

  overflow-x: auto;

  gap: 50px;
  background-color: ${theme.colors.grey2};
  border-radius: 0 0 20px 20px;
  padding: 20px;
  font-size: ${theme.typography.Caption.size};

  .admSerieDiv {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    background-color: ${theme.colors.grey1};
    border-radius: 10px;
    align-items: center;
    padding: 20px;
  }

  .elementButtons {
    display: flex;
    gap: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;

    overflow-y: auto;
    height: 250px;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }

  .DivControlAddSerie {
    display: flex;
    align-items: center;
    /* height: 120px; */
    margin-bottom: 20px;
    /* border: 1px solid red; */

    .AdmAddSerieBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      /* border: 1px solid blue; */
    }
  }
`;
