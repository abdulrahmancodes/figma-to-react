import React from "react";

import "./index.scss";

const ToggleSwitch = (props) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" {...props} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
