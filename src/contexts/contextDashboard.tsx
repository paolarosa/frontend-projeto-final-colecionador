import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiBase } from "../services/api";
import { Book, Card, Colection, Series } from "../types";

interface iDashContextProps {
  children: React.ReactNode;
}

interface iDashContext {
  listRequisition: () => void;
  modalRender: (colection: any) => void;
  series: Series[];
  cards: Card[];
  saveModal: Book;
  setSaveModal: React.Dispatch<React.SetStateAction<Book>>;
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardContext = createContext<iDashContext>({} as iDashContext);

export const DashboardProvider = ({ children }: iDashContextProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const [saveModal, setSaveModal] = useState<Book>({} as Book);
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();

  const modalRender = (colection: any) => {
    setModalOn(!modalOn);
    setSaveModal(colection);
    console.log(saveModal);
  };
  const token = localStorage.getItem("Token");

  const listRequisition = async () => {
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
        saveModal,
        setSaveModal,
        modalOn,
        setModalOn,
        modalRender,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
