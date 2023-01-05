import styled from "styled-components";
// import { Link as LinkRouter } from "react-router-dom";

// interface isStyledLink {}

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* position: relative;
    top: 0;
    left: 0; */
    z-index: -1;
  }
  div {
    margin-top: 40px;
    width: 1110px;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  ul {
    overflow-x: auto;
    width: 1110px;
    height: 300px;
    z-index: 1;
    display: flex;
    flex-direction: row;
  }
`;
