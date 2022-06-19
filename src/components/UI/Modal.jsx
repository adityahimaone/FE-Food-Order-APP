import React from "react";
import Style from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={Style.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={Style.modal}>
      <div className={Style.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal({ children, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
      )
    </>
  );
}

export default Modal;
