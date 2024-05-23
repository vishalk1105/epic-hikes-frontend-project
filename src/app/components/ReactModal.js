import React from "react";
import ReactButton from "./ReactButton";

const ReactModal = ({ modalId, onclickFn, showModal }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-body">
              Are you sure, you want to delete the post???
            </div>
            <div className="modal-footer">
              <ReactButton
                dataBsDismiss={"modal"}
                btnText={"Close"}
                btnclassName="btn-secondary"
              />

              <ReactButton
                dataBsDismiss={showModal ? "modal" : ""}
                btnText={"Delete"}
                btnclassName="btn-danger"
                onClickfn={onclickFn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactModal;
