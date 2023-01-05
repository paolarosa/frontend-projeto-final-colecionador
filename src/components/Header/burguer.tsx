import styled from "styled-components";
import UlNav from "./UlNav";

const StyledBurger: any = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  position: absolute;
  top: 15px;
  right: 20px;

  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props: any) => (props.burger ? "grey" : "black")};
    border-radius: 30px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${(props: any) =>
        props.burger ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${(props: any) =>
        props.burger ? "translateX(100%)" : "translateX(0)"};
      opacity: ${(props: any) => (props.burger ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props: any) =>
        props.burger ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

interface iBurger {
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  burger: boolean;
}

const Burger = ({ setBurger, burger }: iBurger) => {
  return (
    <>
      <StyledBurger burger={burger} onClick={() => setBurger(!burger)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <UlNav burger={burger} />
    </>
  );
};

export default Burger;
