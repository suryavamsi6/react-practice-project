import "./Modal.css";
import { useState } from "react";

const Modal = (props) => {
  const [classes, setClasses] = useState("modal empty");

  if (props.empty) {
    setClasses("modal ");
  }

  const closeHandler = (event) => {
    setClasses("modal ");
  };
  return (
    <div id="myModal" className={classes}>
      <div className="modal-content">
        <button className="close" onChange={closeHandler}>
          &times;
        </button>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default Modal;
