import styled from "styled-components";

export const CardStyled = styled.li`
  min-width: 100px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    /* max-height: 100%; */
    min-width: 100px;
    width: 130px;
    margin-right: 10px;
    object-fit: contain;
    margin: 0 auto;
    box-shadow: 0px 2px 10px #000, 0px 0px 10px -10px #000;
  }
  img:hover {
    transform: scale(1);
    transition: 1s;
    position: absolute;
    width: 180px;
    /* background-position: -60px; */
    box-shadow: 20px 30px 30px rgba(0, 0, 0, 0.16),
      -10px -30px 90px rgba(0, 0, 0, 0.23);
  }
`;
