import { useContext } from "react";
import { DashboardContext } from "../../contexts/contextDashboard";
import { CardStyled } from "./styles";
import { Series } from "../../types";

interface iCard {
  serie: Series;
}

export const Cards = ({ serie }: iCard) => {
  const { listRequisition, series } = useContext(DashboardContext);

  return (
    <>
      {serie?.colection?.map((colection) => (
        <CardStyled key={colection.id}>
          <img src={colection.image} alt="" />
          {/*  <div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>{book.published}</p>
          </div> */}
        </CardStyled>
      ))}
    </>
  );
};
