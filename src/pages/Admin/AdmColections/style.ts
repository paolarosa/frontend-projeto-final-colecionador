import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const AdmMenuButtons = styled.div`
  display: flex;
  align-items: center;
  /* width: 950px;
  overflow-x: auto; */
  /* gap: 20px; */
  padding: 20px;
  background-color: ${theme.colors.grey2};
  border-radius: 20px 20px 0 0;

  .AdmLiDivColections {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: space-around; */
    width: 900px;
    max-width: 900px;
    height: 190px;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
    /* background-color: ${theme.colors.grey2}; */
    /* border-radius: 20px 20px 0 0; */
    border: 1px solid red;
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
`;
