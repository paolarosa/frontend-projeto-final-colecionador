import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../contexts/contextDashboard";
import { StyledButton } from "../../styles/Button";
import { Book } from "../../types";
import { Teste } from "../Forms/formteste";

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
          <Teste />
        </div>
      </div>
    </ModalContainer>
  );
};

export default AdmModal;
