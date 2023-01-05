import styled from "styled-components";

export const CardStyled = styled.div`
  font-size: 14px;
  display: flex;
  gap: 20px;

  li {
    width: 200px;
    height: 170px;
    display: flex;
    background: #f5f5f5;
  }
  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  img {
    width: 80px;
    height: 170px;
    margin-right: 10px;
    object-fit: contain;
  }
`;
