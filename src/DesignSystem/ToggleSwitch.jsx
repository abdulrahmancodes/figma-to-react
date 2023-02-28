import React from "react";

import "./index.scss";

const ToggleSwitch = (props) => {
  return (
    <label class="toggle-switch">
      <input type="checkbox" {...props} />
      <span class="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
