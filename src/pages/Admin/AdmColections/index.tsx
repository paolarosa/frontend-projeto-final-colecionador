import { useContext, useEffect, useState } from "react";
import { AdmNewColectionForm } from "../../../components/Forms/AdmNewColectionForm";
import AdmModalColection from "../../../components/Modals/AdmModalAddColection";
import AdmElementModal from "../../../components/Modals/AdmModalAddElement";
import AdmModal from "../../../components/Modals/AdmModalAddSerie";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { StyledButton } from "../../../styles/Button";
import { Card } from "../../../types";
import { AdmCards } from "./AdmCards/AdmCards";
import { AdmDashboardStyled, AdmMenuButtons } from "./style";

const AdmColections = () => {
  const {
    listRequisition,
    series,
    cards,
    setAddColectionId,
    addColectionId,
    countadd,
    modalOn,
    setModalOn,
    elementModal,
    setElementModal,
  } = useContext(DashboardContext);

  const [filtered, setFiltered] = useState<Card[] | null>(null);

  useEffect(() => {
    listRequisition();
  }, [countadd]);

  const filteredCards = (type: any) => {
    const nome = cards.filter((category) => category.name === type);
    if (nome[0].series) {
      setFiltered(nome[0].series);
      
    }
  };

  const modalRender = (name: string) => {
    setModalOn(!modalOn);
    setAddColectionId(name);
    console.log(name);
    console.log("modalRender ok");
  };

  const admAddElementModal = (name: string) => {
    setElementModal(!elementModal);
    setAddColectionId(name);
    console.log(name);
    
  };

  const modalBtn = (position: number, title: string) => {
    if (position === 0) {
      return (
        <div className="AdmAddSerieBtn">
          <StyledButton
            buttonSize="medium"
            buttonStyle="primary"
            type="button"
            onClick={() => modalRender(title)}
          >
            ADD Serie
          </StyledButton>
        </div>
      );
    }
  };

  return (
    <div>
      {modalOn && <AdmModal />}
      {elementModal && <AdmElementModal />}

      <AdmMenuButtons>
        <div>
          <div className="AdmLiDivColections">
            <div className="AdmListColections">
              <li
                onClick={() => {
                  setFiltered(null);
                }}
              >
                <h2>All</h2>
              </li>
              {cards?.map((card, index) => (
                <li
                  key={index}
                  onClick={() => {
                    filteredCards(card.name);
                  }}
                >
                  <h2>{card.name}</h2>
                </li>
              ))}
            </div>
          </div>

          <div className="AdmFormCreateColection"></div>
        </div>
        <div className="AdmAddNewColectionBtn">
          <AdmNewColectionForm />
        </div>
      </AdmMenuButtons>
      <AdmDashboardStyled>
        {filtered
          ? filtered.map((serie, index) => (
              <div key={index}>
                <div className="DivControlAddSerie">
                  {modalBtn(index, serie.name)}
                </div>

                <div className="admSerieDiv">
                  <div>
                    <h2>{serie.name}</h2>
                  </div>
                  <div className="elementButtons">
                    <StyledButton
                      buttonSize="small"
                      buttonStyle="primary"
                      type="button"
                      onClick={() => admAddElementModal(serie.name)}
                    >
                      ADD
                    </StyledButton>

                    <StyledButton
                      buttonSize="small"
                      buttonStyle="negative"
                      type="button"
                    >
                      Delete
                    </StyledButton>
                  </div>
                </div>
                <ul>
                  <AdmCards serie={serie} />
                </ul>
              </div>
            ))
          : series?.map((serie, index) => (
              <div key={index}>
                <div className="admSerieDiv">
                  <div>
                    <h2>{serie.name}</h2>
                  </div>
                  <div className="elementButtons">
                    <StyledButton
                      buttonSize="small"
                      buttonStyle="primary"
                      type="button"
                    >
                      ADD
                    </StyledButton>
                    <StyledButton
                      buttonSize="small"
                      buttonStyle="negative"
                      type="button"
                      onClick={() => admAddElementModal(serie.name)}
                    >
                      Delete
                    </StyledButton>
                  </div>
                </div>
                <ul className="admUlCardList">
                  <AdmCards serie={serie} />
                </ul>
              </div>
            ))}
      </AdmDashboardStyled>
    </div>
  );
};

export default AdmColections;
