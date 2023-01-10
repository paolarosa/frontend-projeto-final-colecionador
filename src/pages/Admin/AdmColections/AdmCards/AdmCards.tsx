import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/contextDashboard";
import { CardStyled } from "./styles";
import { Series } from "../../../../types";
import { StyledButton } from "../../../../styles/Button";

interface iCard {
  serie: Series;
}

export const AdmCards = ({ serie }: iCard) => {
  const { modalRender, myCollectionSave } = useContext(DashboardContext);

  return (
    <>
      {serie?.colection?.map((colection) => {
        let collectionChecker = false;

        myCollectionSave.map((collection) => {
          if (collection === colection.title) {
            collectionChecker = true;
          }
        });
        // console.log(collectionChecker);
        return (
          <CardStyled key={colection.id} onClick={() => modalRender(colection)}>
            <div className="elementTitle">
              <h3>{colection.title}</h3>
            </div>
            <div className="elementButtons">
              <StyledButton
                buttonSize="medium"
                buttonStyle="negative"
                type="button"
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
