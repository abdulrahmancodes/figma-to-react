import React from "react";
import cx from "classnames";

const Button = ({
  color,
  width = "100%",
  className = "",
  isLessRounded,
  isLarge,
  ...props
}) => {
  return (
    <button
      style={{ width }}
      className={cx(`button button--${color}  ${className}`, {
        "button--less-rounded": isLessRounded,
        "button--large": isLarge,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
