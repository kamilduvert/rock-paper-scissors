import React from "react";
import ReactDOM from "react-dom";
import close from "/src/images/icon-close.svg";
import rules from "/src/images/image-rules.svg";

import './modal.scss';

const Modal = ({ toggleModal }) => {
  return ReactDOM.createPortal(

    <div className="modal">
      <div className="modal__container">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggleModal}>
            <img src={close} alt="Close" />
          </button>
        </div>
        <img src={rules} alt="Rules" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;