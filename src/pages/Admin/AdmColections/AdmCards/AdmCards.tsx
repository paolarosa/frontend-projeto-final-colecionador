import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/contextDashboard";
import { CardStyled } from "./styles";
import { Series } from "../../../../types";
import { StyledButton } from "../../../../styles/Button";
import { apiBase } from "../../../../services/api";

interface iCard {
  serie: Series;
}

export const AdmCards = ({ serie }: iCard) => {
  const { modalRender, myCollectionSave, } = useContext(DashboardContext);

  const deleteCards = async (serieItem: any, colectionItem: any)=>{
    const apiCollections = await apiBase.get("/colections", {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("Token")}` },
    });

    apiCollections.data.forEach((category: any) => {
      category.series.forEach((serie: any) => {
        if(serie.name === serieItem.name){
          serie.colection.forEach((singleColection: any) => {

            if(singleColection.id === colectionItem.id){
              let copySerieColetion = [...serie.colection]

              copySerieColetion = serie.colection.filter((itemTarget: any) => itemTarget.id !== colectionItem.id)
              serie.colection = copySerieColetion
              
              apiBase.patch(`/colections/${category.id}`, category, {
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem("Token")}`,
                  "Content-Type": "application/json"
                }
              })
            }
            
          })
        }
      })
    })
  }

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
          <CardStyled key={colection.title} >
            <div className="elementTitle">
              <h3>{colection.title}</h3>
            </div>
            <div className="elementButtons">
              <StyledButton
                buttonSize="medium"
                buttonStyle="negative"
                type="button"
                onClick={()=>deleteCards(serie, colection)}
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
