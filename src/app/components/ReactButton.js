import React from "react";

const ReactButton = ({
  btnType,
  btnText,
  onClickfn,
  btnClass,
  reactBtnOuterDiv,
  dataBsDismiss,
}) => {
  return (
    <div className={`reactButton text-center ${reactBtnOuterDiv}`}>
      <button
        type={btnType}
        className={`btn ${btnClass}`}
        onClick={onClickfn}
        data-bs-dismiss={dataBsDismiss}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ReactButton;
