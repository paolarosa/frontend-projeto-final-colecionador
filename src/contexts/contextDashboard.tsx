import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { apiBase } from "../services/api";
import { Book, Card, Colection, Series, User } from "../types";

interface iDashContextProps {
  children: React.ReactNode;
}

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
  myCollection: () => Promise<void>;
  myCollectionSave: Book[];
  setMyCollectionSave: React.Dispatch<React.SetStateAction<Book[]>>;
  containCollection: boolean;
  setContainCollection: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;

  addColectionId: string | null
  setAddColectionId: React.Dispatch<React.SetStateAction<string | null>>
  countadd: number;
  setCountadd: React.Dispatch<React.SetStateAction<number>>
}

export const DashboardContext = createContext<iDashContext>({} as iDashContext);

export const DashboardProvider = ({ children }: iDashContextProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const [saveModal, setSaveModal] = useState<Book>({} as Book);
  const [modalOn, setModalOn] = useState(false);
  const [myCollectionSave, setMyCollectionSave] = useState([] as Book[]);
  const [containCollection, setContainCollection] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const [addColectionId, setAddColectionId] = useState<string | null>(null)
  const [countadd, setCountadd] = useState(0)

  // console.log(cards);
  

//   const colection = cards.filter(ele => ele.id === 5);
//   const newTeste = {
// 			"name": "Teste Series",
// 			"id": 1,
// 			"colection": [
// 				{
// 					"image": "https://repositorio.sbrauble.com/arquivos/in/magic/479855/60e4acbbed21b-8uy7w-pxe1q-148424639060e4acbbed263.jpg",
// 					"serie": "Adventures in the Forgotten Realms",
// 					"title": "Acererak, o Arquilich",
// 					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// 					"id": 1
// 				}
// 			]
// 		}
//     const createTeste = [...colection.serie, newTeste]
// }
  
  

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
      console.log(data.myCollection);

      setUser(data);
    } catch (error) {
      console.log(error);
      console.log(error);
      localStorage.clear();
      navigate("/login");
    } finally {
    }
  };

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
      // console.log(data);
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
  console.log(cards);
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
        setCards,
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
        addColectionId,
        setAddColectionId,
        countadd,
        setCountadd,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
