import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { AddSerieForm } from "../../Forms/AdmAddSerieForm";

const AdmModal = () => {
  const { setModalOn, modalOn } = useContext(DashboardContext);

  return (
    <ModalContainer>
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          className="closeModal"
          onClick={() => {
            setModalOn(!modalOn);
          }}
        >
          X
        </button>
        <div>
          <h2>Add new Serie</h2>
          <AddSerieForm />
        </div>
      </div>
    </ModalContainer>
  );
};

export default AdmModal;
