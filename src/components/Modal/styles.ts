import styled from "styled-components";
import { theme } from "../../styles/theme";

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
    background-color: var(--grey-0);
    -webkit-box-shadow: 6px 7px 3px 5px rgba(0, 0, 0, 0.66);
    box-shadow: 6px 7px 3px 5px rgba(0, 0, 0, 0.66);
    width: 850px;
    height: 550px;
    position: relative;
    border-radius: 5px;
    .imgModal{
      min-width: 30%;
      border-radius: 15px;
      width: min-content;
      height: min-content;
      overflow: hidden;
      object-fit: cover;
      border-top: 4px solid #49BCF0;
      border-left: 4px solid #49BCF0;
      border-right: 4px solid #F9F41F;
      border-bottom: 4px solid #F9F41F;
      -webkit-box-shadow: 0px 0px 50px 3px rgba(245,255,18,0.4); 
box-shadow: 0px 0px 50px 3px rgba(245,255,18,0.4);
      img{
        width: 100%;
      }
    }
    .infModal{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 35px;
      width: 100%;
      height: 100%;
      .info{
        width: 100%;
        display: flex;
        justify-content: space-between;
        span{
        font-size: 1.5rem;
        font-weight: 600;
        color: #A3A3A3;
      }
      }
      h2{
        font-size: ${theme.typography.Heading0.size};
      }
      
      .description{
        width: 100%;
        height: 200px;
        overflow-y: auto;
        text-align: justify;
        font-size: ${theme.typography.Headline.size};
        line-height: ${theme.typography.Caption.height};
      }
    }

    .closeModal{
      font-size: 30px;
      position: absolute;
      top: 15px;
      right: 30px;
    }
  }
`;
