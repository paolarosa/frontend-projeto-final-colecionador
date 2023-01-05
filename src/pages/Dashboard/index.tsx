import { useContext, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import background from "../../assets/background.png";
import { DashboardContext } from "../../contexts/contextDashboard";
import { DashboardStyled } from "./styles";
import Header from "../../components/Header";

const Dashboard = () => {
  const { listRequisition, series } = useContext(DashboardContext);

  useEffect(() => {
    listRequisition();
  }, []);

  return (
      <DashboardStyled>
        <Header />
        {/*  <img className="background" alt="" src={background} /> */}
        {series?.map((serie, index) => (
          <div>
            <h2>{serie.name}</h2>
            <ul key={index}>
              <Cards serie={serie} />
            </ul>
          </div>
        ))}
      </DashboardStyled>
  );
};
export default Dashboard;
