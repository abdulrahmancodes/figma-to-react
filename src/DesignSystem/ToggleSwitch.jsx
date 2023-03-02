import React from "react";

import "./index.scss";

const ToggleSwitch = ({ label, ...props }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" {...props} />
      <span className="slider round"></span>
      <p>{label}</p>
    </label>
  );
};

export default ToggleSwitch;
