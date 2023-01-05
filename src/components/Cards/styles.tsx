import styled from "styled-components";

export const CardStyled = styled.li`
  width: 200px;
  min-width: 200px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* .liPets {
	min-width: 200px;
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	border-radius: 10px;
	padding: 8px;
	gap: 10px;
	box-shadow: 5px 8px 0px #fff, 5px 8px 0px 1px #000;
	position: relative;
}

.liPets:not(:last-child)::after {
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

.liPets:nth-of-type(odd) {
	background-color: #cceeff;
}

.liPets:nth-of-type(even) {
	background-color: #ffd951;
} */

  img {
    width: 100%;
    height: 100%;
    margin-right: 10px;
    object-fit: contain;
    margin: 0 auto;
  }
`;
