import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { AdmNewElementForm } from "../../Forms/AdmAddElementForm";

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
          <AdmNewElementForm />
        </div>
      </div>
    </ModalContainer>
  );
};

export default AdmModal;
