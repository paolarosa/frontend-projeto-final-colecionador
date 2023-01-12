import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.80);
  z-index: 10;

  .modal{
    display: flex;
    gap: 20px;
    padding: 25px;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.grey0};
    -webkit-box-shadow: 6px 7px 3px 5px rgba(0, 0, 0, 0.66);
    box-shadow: 6px 7px 3px 5px rgba(0, 0, 0, 0.66);
    width: 850px;
    height: 550px;
    position: relative;
    border-radius: 5px;
  

    .closeModal{
      font-size: 30px;
      position: absolute;
      top: 15px;
      right: 30px;
    }
  }
`;
