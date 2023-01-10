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
    filter: grayscale(100%);
  }
  .colorfulCard{
    filter: grayscale(0%);
    filter: contrast(130%);
  }
  img:hover {
    transform: scale(1);
    transition: 0.5s;
    position: absolute;
    width: 180px;
    /* background-position: -60px; */
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
