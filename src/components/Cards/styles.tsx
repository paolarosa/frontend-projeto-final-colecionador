import styled from "styled-components";

export const CardStyled = styled.li`
  min-width: 150px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    object-fit: contain;
    margin: 0 auto;
    box-shadow: 0px 2px 10px #000, 0px 0px 10px -10px #000;
  }
`;
