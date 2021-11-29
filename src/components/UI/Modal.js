import "./Modal.css";
import { useState } from "react";

const Modal = (props) => {
  const classes = "modal " + props.className;

  return (
    <div id="myModal" className={classes}>
      <div className="modal-content">
        <button className="close">&times;</button>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default Modal;
