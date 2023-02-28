import React from "react";

import "./index.scss";

const Input = ({ type = "text", className = "", ...props }) => {
  return <input {...props} type={type} className={`input ${className}`} />;
};

export default Input;
