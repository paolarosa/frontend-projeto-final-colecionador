import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../contexts/contextDashboard";

const Modal = () => {
  const {saveModal, setModalOn,modalOn,myCollection,myCollectionSave,containCollection,
    setContainCollection}:any = useContext(DashboardContext);

  myCollectionSave.forEach((collections:string)=>{
    if(collections === saveModal.title){
      console.log("tenho")
      return setContainCollection(true)
    }
  })

  return (
    <ModalContainer onClick={()=>{setModalOn(!modalOn)
      setContainCollection(false)
    }}>
      <div className="modal" onClick={(event)=>{event.stopPropagation();}}>
        <button className="closeModal" onClick={()=>{setModalOn(!modalOn)
        setContainCollection(false)
        }}>X</button>
        <div className="imgModal">
          <img src={saveModal.image} alt="" />
          </div>
        <div className="infModal">
        <h2>{saveModal.title}</h2>
        <p>{saveModal.description}</p>
        <span>{saveModal.author}</span>
        <span>{saveModal.published}</span>
        <button onClick={myCollection}>{containCollection? ("Remover"):("Adicionar")}</button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
