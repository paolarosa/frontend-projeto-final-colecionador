import { useContext, useEffect, useState } from "react";
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
import { Carrossel } from "../../components/Carrossel/Carrossel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  return (
    <div>
      <Header />
      <ContainerDash>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {modalOn ? <Modal /> : null}

        <div className="divButtons">
          <MenuButtons actived={actived}>
            <li
              onClick={() => {
                setFiltered(null);
                setActived("All");
              }}
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
              >
                <h2>{card.name}</h2>
              </li>
            ))}
          </MenuButtons>
        </div>
        <BackgroundDash className="background" />
        <DashboardStyled actived={actived}>
          {filtered
            ? filtered.map((serie, index) => (
                <Carrossel serie={serie} index={index} key={index} />
              ))
            : series?.map((serie, index) => (
                <Carrossel serie={serie} index={index} key={index} />
              ))}
        </DashboardStyled>
      </ContainerDash>
    </div>
  );
};
export default Dashboard;
