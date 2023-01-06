import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiBase } from "../services/api";
import { Card, Colection, Series } from "../types";

interface iDashContextProps {
  children: React.ReactNode;
}

interface iDashContext {
  listRequisition: () => void;
  series: Series[];
  cards: Card[];
}

export const DashboardContext = createContext<iDashContext>({} as iDashContext);

export const DashboardProvider = ({ children }: iDashContextProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const navigate = useNavigate();

  const listRequisition = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const response = await apiBase.get("/colections", {
          headers: { Authorization: `Bearer ${token}` },
        });
        let newValues: Series[] = [];
        const data: Colection[] = response.data;
        setCards(response.data);

        data.forEach((colection: Colection) => {
          colection.series.forEach((serie) => {
            newValues = [...newValues, serie];
            /* setSeries((prev) => [...prev, serie]); */
          });
        });
        
        setSeries(newValues);
      } catch (error) {
        console.log(error);
      }
    } else {
      /* navigate("/"); */
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        listRequisition,
        series,
        cards,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
