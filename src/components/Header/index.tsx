import { useState } from "react";
import Burger from "./burguer";
import { HeaderContainer } from "./styles";
import LOGO4 from "../../assets/LOGO4.png";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={LOGO4} alt="logo" />
      </div>
      <Burger burger={burger} setBurger={setBurger} />
    </HeaderContainer>
  );
};

export default Header;
