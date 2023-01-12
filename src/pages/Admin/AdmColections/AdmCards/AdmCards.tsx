import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../contexts/contextDashboard";
import { CardStyled } from "./styles";
import { Series } from "../../../../types";
import { StyledButton } from "../../../../styles/Button";
import { apiBase } from "../../../../services/api";

interface iCard {
  serie: Series;
  name: string;
  runEffect: boolean;
  callEffect: boolean;
  setRunEffect: (data:boolean) => void;
  setCallEffect: (data: boolean) => void;
  setFiltered: (data: any) => void;
}

export const AdmCards = ({ serie, name, runEffect, callEffect, setRunEffect, setCallEffect, setFiltered }: iCard) => {
  const { modalRender, myCollectionSave, countadd, setCountadd, cards, series } =
    useContext(DashboardContext);

    useEffect(() => {

      if (runEffect) {

        const getName = cards.filter((category) => {

          
          return category.name === name

        });

  }
      
    }, [callEffect]);
  
  
  const deleteCards = async (serieItem: any, colectionItem: any) => {
    const apiCollections = await apiBase.get("/colections", {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("Token")}`,
      },
    });

    apiCollections.data.forEach((category: any) => {
      category.series.forEach((serie: any) => {
        if (serie.name === serieItem.name) {
          serie.colection.forEach((singleColection: any) => {
            if (singleColection.title === colectionItem.title) {
              let copySerieColetion = [...serie.colection];

              copySerieColetion = serie.colection.filter(
                (itemTarget: any) => itemTarget.title !== colectionItem.title
              );
              serie.colection = copySerieColetion;
              try {
                apiBase.patch(`/colections/${category.id}`, category, {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                      "Token"
                    )}`,
                    "Content-Type": "application/json",
                  },
                });
                setCountadd(countadd + 1);
              } catch (error) {
                console.log(error);
              }
            }
          });
        }
      });
    });
    setRunEffect(true)
    setCallEffect(!callEffect)
  };

  return (
    <>
      {serie?.colection?.map((colection) => {
        let collectionChecker = false;

        myCollectionSave.map((collection) => {
          if (collection.title === colection.title) {
            collectionChecker = true;
          }
        });

        return (
          <CardStyled key={colection.title}>
            <div className="elementTitle">
              <h3>{colection.title}</h3>
            </div>
            <div className="elementButtons">
              <StyledButton
                buttonSize="medium"
                buttonStyle="negative"
                type="button"
                onClick={() => deleteCards(serie, colection)}
              >
                Delete
              </StyledButton>
            </div>
          </CardStyled>
        );
      })}
    </>
  );
};
