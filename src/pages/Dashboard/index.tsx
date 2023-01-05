import { useContext, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import background from "../../assets/background.png";
import { DashboardContext } from "../../contexts/contextDashboard";
import { BachgroundDash, ContainerDash, DashboardStyled } from "./styles";
import Header from "../../components/Header";

const Dashboard = () => {
  const { listRequisition, series } = useContext(DashboardContext);

  useEffect(() => {
    listRequisition();
  }, []);

  return (
    <ContainerDash>
      <Header />
      <BachgroundDash className="background" />
      <DashboardStyled>
        {series?.map((serie, index) => (
          <div>
            <h2>{serie.name}</h2>
            <ul key={index}>
              <Cards serie={serie} />
            </ul>
          </div>
        ))}
      </DashboardStyled>
    </ContainerDash>
  );
};
export default Dashboard;
