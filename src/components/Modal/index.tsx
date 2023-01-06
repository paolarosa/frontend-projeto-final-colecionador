import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../contexts/contextDashboard";

const Modal = () => {
  const {saveModal, setModalOn,modalOn}: any = useContext(DashboardContext);

  console.log(saveModal)

  return (
    <ModalContainer onClick={()=>setModalOn(!modalOn)}>
      <div className="modal" onClick={(event)=>{event.stopPropagation();}}>
        <button className="closeModal" onClick={()=>setModalOn(!modalOn)}>X</button>
        <div className="imgModal">
          <img src={saveModal.image} alt="" />
          </div>
        <div className="infModal">
        <h2>{saveModal.title}</h2>
        <p>{saveModal.description}</p>
        <span>{saveModal.author}</span>
        <span>{saveModal.published}</span>
        <button>Adicionar</button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
