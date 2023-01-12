import { createContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import { apiBase } from "../services/api";
import { Book, Card, Colection, Series, User } from "../types";

export interface iCollectionItem {
  author: string;
  cover_art: string;
  description: string;
  id: number;
  image: string;
  interior_art: string;
  published: number;
  sections: number;
  title: string;
  userId: number;
}

interface iDashContext {
  listRequisition: () => void;
  modalRender: (colection: any) => void;
  series: Series[];
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  saveModal: Book;
  setSaveModal: React.Dispatch<React.SetStateAction<Book>>;
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  elementModal: boolean;
  setElementModal: React.Dispatch<React.SetStateAction<boolean>>;
  myCollection: () => Promise<void>;
  myCollectionSave: Book[];
  setMyCollectionSave: React.Dispatch<React.SetStateAction<Book[]>>;
  containCollection: boolean;
  setContainCollection: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;

  addColectionId: string | null;
  setAddColectionId: React.Dispatch<React.SetStateAction<string | null>>;
  countadd: number;
  setCountadd: React.Dispatch<React.SetStateAction<number>>;
  setSeries: React.Dispatch<React.SetStateAction<Series[]>>;
  nameFilter: string
  setNameFilter: React.Dispatch<React.SetStateAction<string>>
}

export const DashboardContext = createContext<iDashContext>({} as iDashContext);

export const DashboardProvider = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const [saveModal, setSaveModal] = useState<Book>({} as Book);
  const [myCollectionSave, setMyCollectionSave] = useState([] as Book[]);
  const [containCollection, setContainCollection] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const [addColectionId, setAddColectionId] = useState<string | null>(null);
  const [modalOn, setModalOn] = useState(false);
  const [elementModal, setElementModal] = useState(false);
  const [countadd, setCountadd] = useState(0);
  const [nameFilter, setNameFilter] = useState("");

  const token = localStorage.getItem("Token");

  const modalRender = (colection: iCollectionItem) => {
    setModalOn(!modalOn);
    setSaveModal(colection);
    console.log(saveModal);
  };

  const myCollection = async () => {
    if (containCollection) {
      let myNewColletion = myCollectionSave.filter(
        (elemet) => elemet.title !== saveModal.title
      );
      setMyCollectionSave(myNewColletion);
      const data = {
        myCollection: myNewColletion,
      };
      try {
        const idUser = localStorage.getItem("@userID");
        const response = await apiBase.patch(`/users/${idUser}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Item Removido da sua coleção com sucesso 🧐", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.log(error);
        toast.error("Algo deu Errado 🤕", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setModalOn(false);
        setContainCollection(false);
      }
    }

    if (containCollection === false) {
      let myNewColletion = [...myCollectionSave, saveModal];
      setMyCollectionSave(myNewColletion);
      const data = {
        myCollection: myNewColletion,
      };

      try {
        const idUser = localStorage.getItem("@userID");
        const response = await apiBase.patch(`/users/${idUser}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.success("Item Adicionado a sua coleção com sucesso 😎", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.log(error);
        toast.error("Algo deu Errado 🤕", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setModalOn(false);
        setContainCollection(false);
      }
    }
  };

  const listRequisition = async () => {
    if (token) {
      try {
        const response = await apiBase.get("/colections", {
          headers: { Authorization: `Bearer ${token}` },
        });
        let newValues: Series[] = [];
        const data: Colection[] = response.data;
        setCards(response.data.sort((a: any, b: any) => a.name - b.name));
        data.forEach((colection: Colection) => {
          colection.series.forEach((serie) => {
            newValues = [...newValues, serie];
          });
        });
        setSeries(newValues);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        listRequisition,
        series,
        cards,
        setCards,
        saveModal,
        setSaveModal,
        modalOn,
        setModalOn,
        elementModal,
        setElementModal,
        modalRender,
        myCollection,
        myCollectionSave,
        setMyCollectionSave,
        containCollection,
        setContainCollection,
        user,
        setUser,
        addColectionId,
        setAddColectionId,
        countadd,
        setCountadd,
        setSeries,
        nameFilter,
        setNameFilter,
      }}
    >
      <Outlet />
    </DashboardContext.Provider>
  );
};
