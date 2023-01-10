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
        <section>
          <div />
          <div />
          <div />
        </section>
        <UlNav burger={burger} />
      </StyledBurger>
    </>
  );
};

export default Burger;
