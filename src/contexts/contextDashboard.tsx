import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { apiBase } from "../services/api";
import { Book, Card, Colection, Series, User } from "../types";

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
  myCollection: () => Promise<void>;
  myCollectionSave: string[];
  setMyCollectionSave: React.Dispatch<React.SetStateAction<string[]>>;
  containCollection: boolean;
  setContainCollection: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const DashboardContext = createContext<iDashContext>({} as iDashContext);

export const DashboardProvider = ({ children }: iDashContextProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const [saveModal, setSaveModal] = useState<Book>({} as Book);
  const [modalOn, setModalOn] = useState(false);
  const [myCollectionSave, setMyCollectionSave] = useState([""]);
  const [containCollection, setContainCollection] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("Token");

  const loadUser = async () => {
    if (!token) {
      localStorage.clear();
      navigate("/login");
    }

    try {
      const idUser = window.localStorage.getItem("@userID");

      const { data } = await apiBase.get(`/users/${idUser}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyCollectionSave(data.myCollection);

      setUser(data);
    } catch (error) {
      console.log(error);
      console.log(error);
      localStorage.clear();
      navigate("/login");
    } finally {
    }
  };

  const modalRender = (colection: any) => {
    setModalOn(!modalOn);
    setSaveModal(colection);
    console.log(saveModal);
  };

  const myCollection = async () => {
    if (containCollection) {
      let myNewColletion = myCollectionSave.filter(
        (elemet) => elemet !== saveModal.title
      );
      setMyCollectionSave(myNewColletion);
      const data = {
        myCollection: myNewColletion,
      };
      console.log(data);
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
      let myNewColletion = [...myCollectionSave, saveModal.title];
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

  useEffect(() => {
    loadUser();
  }, []);

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
        myCollection,
        myCollectionSave,
        setMyCollectionSave,
        containCollection,
        setContainCollection,
        user,
        setUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
