import styled from "styled-components";

export const Ul: any = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 55px;
  right: 0;

  transform: ${(props: any) =>
  props.burger ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;

  border: 2px solid black;
  border-radius: 10px;
  background-color: #FFFFFF;

  li, button {
    border: 1px solid transparent;
    color: #363636;
    padding: 5px;
  }

  li:hover, button:hover {
    border: 1px solid yellow;
    border-radius: 10px;
    justify-content: center;
    color: black;
    transition: 1s;
  }

  @media (min-width: 1024px){
    position: static;
    flex-direction: row;

    background-color: transparent;
    transform: none;
    border: none;

    li:hover, button:hover{
      border-color: transparent;
      color: var(--grey-3);
      transition: 300ms;
    }
  }
`;