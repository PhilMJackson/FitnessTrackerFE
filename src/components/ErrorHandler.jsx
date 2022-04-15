import React from "react";

const ErrorHandler = ({ message }) => {
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h1>Oops! Something went wrong!</h1>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default ErrorHandler;
