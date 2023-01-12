import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/contextDashboard";
import { CardStyled } from "./styles";
import { Series } from "../../../../types";
import { StyledButton } from "../../../../styles/Button";

interface iCard {
  serie: Series;
}

export const AdmCards = ({ serie }: iCard) => {
  const { modalRender, myCollectionSave, } = useContext(DashboardContext);

  // const deleteCards = (name:any)=>{
  //   console.log(name)

  //   const filterName = cards.filter((ele) => {
  //     const filter = ele.series?.filter((el) => {
  //       return el.name === nameFilter;
  //     });
  //   });


  //   console.log(addColectionId)
  //   console.log(filterName)

  //   // let filterColletions = filterName[0].series?.filter(
  //   //   (elemet) => elemet.name !== name
  //   // );
  // }

  return (
    <>
      {serie?.colection?.map((colection) => {
        let collectionChecker = false;

        myCollectionSave.map((collection) => {
          if (collection.title === colection.title) {
            collectionChecker = true;
          }
        });
        // console.log(collectionChecker);
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
                // onClick={()=>deleteCards(colection)}
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
