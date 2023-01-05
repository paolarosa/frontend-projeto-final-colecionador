import styled from "styled-components";
import image from "../../assets/background.png";

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 50px;

  div {
    margin-top: 40px;
    width: 1110px;
    
  }
  h2 {
    font-size: 20px;
    background-color: #d9d9d9;
    max-width: 200px;
    height: 50px;
    padding: 10px;
    border-top-right-radius: 50px;
    box-shadow: 4px 4px 10px #000, 2px 4px 0px 1px #000;
  }
  ul {
    overflow-x: auto;
    width: 100%;
    height: 200px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    background-color: #d9d9d9;
    border-radius: 10px;
    box-shadow: 4px 4px 10px #000, 4px 4px 0px 1px #000;
    
  }
  * {
    scrollbar-width: auto;#71c6ed #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    height: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #d9d9d9;
  }

  *::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }


/* ul:not(:last-child)::after {
	content: "";
	top: 50%;
	z-index: 2000;
	right: -60px;
	position: absolute;
	display: block;
	width: 70px;
	height: 10px;
	background: url(../../src/imgs/detail.svg);
}

ul:nth-of-type(odd) {
	background-color: #cceeff;
}

ul:nth-of-type(even) {
	background-color: #ffd951;
}  */
`;

export const BachgroundDash = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 50%;
`;
export const ContainerDash = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
