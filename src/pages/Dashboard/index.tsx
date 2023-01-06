import { useContext, useEffect, useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import { DashboardContext } from "../../contexts/contextDashboard";
import {
  BachgroundDash,
  ContainerDash,
  DashboardStyled,
  MenuButtons,
} from "./styles";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const { listRequisition, series, cards,modalOn } = useContext(DashboardContext);
  const [filtered, setFiltered,] = useState(null);

  useEffect(() => {
    listRequisition();
  }, []);
  console.log(cards);
  /* function filteredCards(type: any) {
    setFiltered(cards.filter((category) => category.name === type));
  } */

  return (
    <ContainerDash>
      {modalOn? (<Modal/>):null}
      <Header />
      <MenuButtons>
        <li>
          <h2 /* onClick={() => setFiltered(null)} */>All</h2>
        </li>
        {cards?.map((card, index) => (
          <li>
            <h2
            /* onClick={() => {
                filteredCards("books_colections");
              }} */
            >
              {card.name}
            </h2>
          </li>
        ))}
      </MenuButtons>

      <BachgroundDash className="background" />
      <DashboardStyled>
        {series?.map((serie, index) => (
          <div>
            <h2>{serie.name}</h2>
            <ul key={index}>
              <Cards serie={serie} />
            </ul>
          </div>
        ))}
      </DashboardStyled>
    </ContainerDash>
  );
};
export default Dashboard;
