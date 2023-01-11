import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { AddSerieForm } from "../../Forms/AdmAddSerieForm";

interface iAdmModal {
  onCustomClose?: Function;
}

const AdmModal = ({onCustomClose}:iAdmModal) => {
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
            if (onCustomClose) {
              
              onCustomClose()
            }
          }}
        >
          X
        </button>
        <div>
          <h2>Add new Serie</h2>
          <AddSerieForm customName="true" onCustomClose={onCustomClose} />
        </div>
      </div>
    </ModalContainer>
  );
};

export default AdmModal;
