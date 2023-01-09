import { useContext, useEffect, useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import $ from "jquery";
import { DashboardContext } from "../../contexts/contextDashboard";
import {
  BackgroundDash,
  ContainerDash,
  DashboardStyled,
  MenuButtons,
} from "./styles";
import Header from "../../components/Header";
import { Card } from "../../types";
import Modal from "../../components/Modal";
import set from "../../assets/seta.png";

const Dashboard = () => {
  const { listRequisition, series, cards, modalOn } =
    useContext(DashboardContext);
  const [filtered, setFiltered] = useState(null as Card[] | null);
  const [actived, setActived] = useState("All");

  useEffect(() => {
    listRequisition();
  }, []);

  const filteredCards = (type: any) => {
    const nome = cards.filter((category) => category.name === type);
    if (nome[0].series) {
      setFiltered(nome[0].series);
    }
  };

  $("#buttonRoll").on("click", function () {
    var index: any = $(this).index();
    var list: any = $("#listColection").scrollLeft();
    $("#listColection").animate(
      { scrollLeft: list + (Number(index === 0 && "-") + 150) },
      100
    );
  });

  return (
    <ContainerDash>
      {modalOn ? <Modal /> : null}
      <Header />
      <MenuButtons actived={actived}>
        <li
          onClick={() => {
            setFiltered(null);
            setActived("All");
          }}
          /*     className={actived ? "actived" : ""} */
        >
          <h2>All</h2>
        </li>
        {cards?.map((card, index) => (
          <li
            key={index}
            onClick={() => {
              filteredCards(card.name);
              setActived(card.name);
            }}
            /*  className={actived ? "actived" : ""} */
          >
            <h2>{card.name}</h2>
          </li>
        ))}
      </MenuButtons>
      <BackgroundDash className="background" />
      <DashboardStyled actived={actived}>
        {filtered
          ? filtered.map((serie, index) => (
              <div key={index}>
                <h2>{serie.name}</h2>
                <ul id="listColection">
                  <span />
                  <Cards serie={serie} />
                </ul>
              </div>
            ))
          : series?.map((serie, index) => (
              <div key={index}>
                <h2>{serie.name}</h2>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
                <ul id="listColection">
                  <span />
                  {/* <button id="buttonRoll" className="button-scroll" /> */}
                  <Cards serie={serie} />
                  <button
                    id="buttonRoll"
                    className="button-scroll-back scroll-none"
                  >
                    <img src={set} />
                  </button>
                </ul>
              </div>
            ))}
      </DashboardStyled>
    </ContainerDash>
  );
};
export default Dashboard;
