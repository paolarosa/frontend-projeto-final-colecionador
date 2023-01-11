import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { AdmNewElementForm } from "../../Forms/AdmAddElementForm";

const AdmElementModal = () => {
  const { setElementModal, elementModal } = useContext(DashboardContext);

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
            setElementModal(!elementModal);
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

export default AdmElementModal;
