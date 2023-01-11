import { useContext, useEffect, useState } from "react";
import { AdmNewColectionForm } from "../../../components/Forms/AdmNewColectionForm";
import { Teste } from "../../../components/Forms/formteste";
import AdmModal from "../../../components/Modals";
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

  // const addColection = (name: string) => {
  //   setAddColectionId(name);
  //   console.log(name);
  // };

  const modalRender = (name: string) => {
    setModalOn(!modalOn);
    // addColection(name)
    setAddColectionId(name);
    console.log(name);
    console.log("modalRender ok");
  };

  const modalBtn = (position: number, title: string) => {
    if (position === 0) {
      return (
        <StyledButton
          buttonSize="default"
          buttonStyle="primary"
          type="button"
          // onClick={() => addColection(serie.name)}
  
          onClick={() => modalRender(title)}
        >
          ADD Serie
        </StyledButton>
      );
    }
  };

  return (
    <div>
      {modalOn ? <AdmModal /> : null}
      <AdmMenuButtons>
        <div>
          <div className="AdmLiDivColections">
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
          <div className="AdmFormCreateColection">
            <AdmNewColectionForm />
          </div>
        </div>
      </AdmMenuButtons>
      <AdmDashboardStyled>
        {filtered
          ? filtered.map((serie, index) => (
              <div key={index}>
                <div>
                  {/* {addColectionId && <Teste />} */}
                  
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
                      // onClick={() => addColection(serie.name)}
                      // onClick={() => modalRender()}
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
