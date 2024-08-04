import React from "react";

export const ErrorMessage = ({ errorMsg }) => {
  return <div className="todo__error-msg">{errorMsg ? errorMsg : null}</div>;
};
