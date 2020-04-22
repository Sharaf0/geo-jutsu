import React from "react";
import { ButtonProps } from "./Button";
import { ButtonsList } from "./ButtonsList";

interface Props {
  buttons: Omit<ButtonProps, "onClick">[];
}

function DrawingPalette(props: Props) {
  const onClick = function (value: string) {
    alert(value);
  };

  const buttons = props.buttons.map((b) => ({ ...b, onClick }));

  return (
    <div className="btn-group-vertical">
      <ButtonsList buttons={buttons} />
    </div>
  );
}

export default DrawingPalette;
