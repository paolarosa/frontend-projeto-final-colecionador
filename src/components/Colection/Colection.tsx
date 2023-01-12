import { useContext } from "react";
import { DashboardContext } from "../../contexts/contextDashboard";
import { UlStyled } from "./styles";

export const Colection = () => {
  const { listRequisition } = useContext(DashboardContext);

  return (
    <UlStyled>
      <h2>UL</h2>
    </UlStyled>
  );
};
