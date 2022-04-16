import React from "react";

const ErrorHandler = ({ name, message, open, setIsOpen, setError }) => {
  if (!open) return null;
  console.log("I Should Render");
  const closeModal = () => {
    setIsOpen(false);
    setError({});
  };
  const click = () => {
    console.log("clicked");
  };
  return (
    <>
      <div id="overlay" onClick={(click, closeModal)}></div>
      <div id="modal" className="modal">
        <div className="modal-header">
          <div className="title">{name}</div>
          <button
            data-close-button
            className="close-button"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">{message}</div>
      </div>
    </>
  );
};

export default ErrorHandler;
