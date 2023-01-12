import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { AdmNewColectionForm } from "../../Forms/AdmNewColectionForm";


const AdmModalColection = () => {
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
          <AdmNewColectionForm />
        </div>
      </div>
    </ModalContainer>
  );
};

export default AdmModalColection;
