import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandle() {
    setModalIsOpen(true);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>A Span</span>
        <button className="btn" onClick={deleteHandle}>
          Delete
        </button>
      </div>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default Todo;
