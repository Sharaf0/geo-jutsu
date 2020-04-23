import React from "react";
import classes from "./styles/button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  onClick: (value: string) => void;
  value: string;
  originalColor: string;
  clickedColor: string;
  isClicked: boolean;
}

function Button(props: ButtonProps) {
  const style = {
    backgroundColor: props.originalColor,
  };
  const myClasses = classNames({
    [classes.myButton]: true,
    [classes.clicked]: props.isClicked,
  });

  if (props.isClicked) {
    style.backgroundColor = props.clickedColor;
  }
  const onClick = function () {
    if (!props.isClicked) props.onClick(props.value);
  };
  return (
    <button style={style} onClick={onClick} className={myClasses}>
      {props.value}
    </button>
  );
}

export default Button;
