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

        myCollectionSave.map((collection) => {
          if(collection === colection.title){
            collectionChecker = true
          }
        })
        console.log(collectionChecker)
        return(
          <CardStyled key={colection.id} onClick={()=>modalRender(colection)}>
            <img src={colection.image} alt="" className={`${collectionChecker? ("colorfulCard") : (null)}`} />
            {/*  <div>
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              <p>{book.published}</p>
            </div> */}
          </CardStyled>
        )
      })}
    </>
  );
};
