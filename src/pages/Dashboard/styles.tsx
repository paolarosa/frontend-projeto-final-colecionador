import styled from "styled-components";
// import { Link as LinkRouter } from "react-router-dom";

// interface isStyledLink {}

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

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
    height: 200px;
    margin-top: 40px;
  }
  h2 {
    font-size: 18px;
  }
  ul {
    overflow-x: auto;
    width: 1120px;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
  }
`;
