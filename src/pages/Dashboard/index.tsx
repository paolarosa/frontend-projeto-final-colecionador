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
import { Card } from "../../types";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const { listRequisition, series, cards, modalOn } = useContext(DashboardContext);
  const [filtered, setFiltered] = useState(null as Card[] | null);

  useEffect(() => {
    listRequisition();
  }, []);

  function filteredCards(type: any) {
    const nome = cards.filter((category) => category.name === type);
    if (nome[0].series) {
      setFiltered(nome[0].series);
    }
  }

  return (
    <ContainerDash>
      {modalOn? (<Modal/>):null}
      <Header />
      <MenuButtons>
        <li>
          <h2 onClick={() => setFiltered(null)}>All</h2>
        </li>
        {cards?.map((card, index) => (
          <li key={index}>
            <h2
              onClick={() => {
                filteredCards(card.name);
              }}
            >
              {card.name}
            </h2>
          </li>
        ))}
      </MenuButtons>
      <BachgroundDash className="background" />
      <DashboardStyled>
        {filtered
          ? filtered.map((serie, index) => (
              <div key={index}>
                <h2>{serie.name}</h2>

                <ul>
                  <Cards serie={serie} />
                </ul>
              </div>
            ))
          : series?.map((serie, index) => (
              <div key={index}>
                <h2>{serie.name}</h2>
                <ul>
                  <button className="button-scroll" />
                  <Cards serie={serie} />
                  <button className="button-scroll-back scroll-none" />
                </ul>
              </div>
            ))}
      </DashboardStyled>
    </ContainerDash>
  );
};
export default Dashboard;
