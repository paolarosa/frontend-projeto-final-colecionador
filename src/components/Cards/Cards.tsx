import { useContext } from "react";
import { DashboardContext } from "../../contexts/contextDashboard";
import { CardStyled } from "./styles";
import { Series } from "../../types";

interface iCard {
  serie: Series;
}

export const Cards = ({ serie }: iCard) => {
  const { listRequisition, series, modalRender,myCollectionSave } = useContext(DashboardContext);

  return (
    <>
      {serie?.colection?.map((colection) => {
        let collectionChecker = false

        myCollectionSave?.map((collection) => {
          if(collection.title === colection.title){
            collectionChecker = true
          }
        })
        
        return(
          <CardStyled key={colection.id} onClick={()=>modalRender(colection)}>
            <img src={colection.image} alt="" className={`${collectionChecker? ("colorfulCard") : (null)}`} />
          </CardStyled>
        )
      })}
    </>
  );
};
