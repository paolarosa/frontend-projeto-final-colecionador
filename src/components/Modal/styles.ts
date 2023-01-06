import styled from "styled-components";

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
      gap: 25px;
      width: 100%;
      height: 100%;
      h2{
        font-size: 28px;
      }
      p{
        font-size: 1.8rem;
      }
      span{
        font-size: 1.5rem;
        font-weight: 600;
      }
      button{
        font-size: 2rem;
        background-color: #49BCF0;
        padding: 15px;
        border-radius: 30px;
        -webkit-box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.87); 
        box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.87);
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
