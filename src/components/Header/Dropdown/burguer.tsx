import { StyledBurger } from "./styles"
import UlNav from "../Navigation/UlNav";

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
