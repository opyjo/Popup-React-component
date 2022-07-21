import React from "react";
import "./Popup.css";

const Popup = ({ buttonPopup, children, setButtonPopup }) => {
  return buttonPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => setButtonPopup(!buttonPopup)}
        >
          close
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
