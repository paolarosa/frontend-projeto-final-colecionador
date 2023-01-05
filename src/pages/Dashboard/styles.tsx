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
  div:nth-child(odd) ul, div:nth-child(odd) h2  {
	background-color: #cceeff;
}


div:nth-child(even) ul, div:nth-child(even) h2{
	background-color: #FFE484;
}  
  h2 {
    font-size: 20px;
    background-color: #d9d9d9;
    max-width: 200px;
    height: 50px;
    padding: 10px;
    /* border-top-right-radius: 50px; */
    box-shadow: 0px 2px 2px #000, 0px 0px 5px 0px #000;
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
    padding-left: 10px;
    background-color: #d9d9d9;
    border-top-right-radius: 10px;
    box-shadow: 10px 10px 10px #000, 1px 1px 5px 0px #000;
    
  }
  * {
    scrollbar-width: auto;#71c6ed #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    height: 16px;
  }

  *::-webkit-scrollbar-track {
    background:#ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
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
} */


`;

export const BachgroundDash = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  position: fixed;
  top: 0;
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
