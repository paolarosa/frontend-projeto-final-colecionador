import { useContext, useEffect, useState } from "react";
import { AdmNewColectionForm } from "../../../components/Forms/AdmNewColectionForm";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { StyledButton } from "../../../styles/Button";
import { Card } from "../../../types";
import { AdmCards } from "./AdmCards/AdmCards";
import { AdmDashboardStyled, AdmMenuButtons } from "./style";

const AdmColections = () => {
  const { listRequisition, series, cards } = useContext(DashboardContext);

  const [filtered, setFiltered] = useState(null as Card[] | null);

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
      <AdmMenuButtons>
        <div>
          {/* <div>
            <StyledButton buttonSize="medium" buttonStyle="primary">
              New Colection
            </StyledButton>
          </div> */}
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
                <div className="admSerieDiv">
                  <div>
                    <h2>{serie.name}</h2>
                  </div>
                  <div className="elementButtons">
                    <StyledButton
                      buttonSize="medium"
                      buttonStyle="primary"
                      type="button"
                    >
                      ADD
                    </StyledButton>
                    <StyledButton
                      buttonSize="medium"
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
                      buttonSize="medium"
                      buttonStyle="primary"
                      type="button"
                    >
                      ADD
                    </StyledButton>
                    <StyledButton
                      buttonSize="medium"
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
