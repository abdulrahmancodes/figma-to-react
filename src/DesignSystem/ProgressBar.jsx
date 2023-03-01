import React from "react";
import cx from "classnames";

const ProgressBar = ({ progress = 0, isLarge }) => {
  return (
    <div
      className={cx("progress-bar-wrapper", {
        "progress-bar-wrapper--large": isLarge,
      })}
    >
      <div className="progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
