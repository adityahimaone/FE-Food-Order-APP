import React from "react";
import Style from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={Style.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={Style.modal}>
      <div className={Style.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
      )
    </>
  );
}

export default Modal;
