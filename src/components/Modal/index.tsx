import React, { useContext } from "react";
import { ModalContainer } from "./styles";
import { DashboardContext } from "../../contexts/contextDashboard";
import { StyledButton } from "../../styles/Button";

const Modal = () => {
  const {
    saveModal,
    setModalOn,
    modalOn,
    myCollection,
    myCollectionSave,
    containCollection,
    setContainCollection,
  } = useContext(DashboardContext);

  myCollectionSave?.forEach((collections: string) => {
    if (collections === saveModal.title) {
      return setContainCollection(true);
    }
  });

  return (
    <ModalContainer
      onClick={() => {
        setModalOn(!modalOn);
        setContainCollection(false);
      }}
    >
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
            setContainCollection(false);
          }}
        >
          X
        </button>
        <div className="imgModal">
          <img src={saveModal.image} alt="" />
        </div>
        <div className="infModal">
          <h2>{saveModal.title}</h2>
          <div className="info">
            <span>{saveModal.author}</span>
            <span>{saveModal.published}</span>
          </div>
          <div className="description">
            <p>{saveModal.description}</p>
          </div>
          <StyledButton
            onClick={myCollection}
            type="button"
            buttonStyle={containCollection ? "primary" : "secundary"}
            buttonSize="modal"
          >
            {containCollection ? "Remover" : "Adicionar"}
          </StyledButton>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
