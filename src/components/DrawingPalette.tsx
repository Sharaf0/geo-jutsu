import React, { useCallback } from "react";
import { ButtonProps } from "./Button";
import { ButtonsList } from "./ButtonsList";
import { drawingModeContext } from "../contexts/DrawingModeContext";

interface Props {
  buttons: Omit<ButtonProps, "onClick">[];
}

function DrawingPalette(props: Props) {
  const { drawingMode, setCurrentDrawingMode } = React.useContext(
    drawingModeContext
  );

  const onClick = useCallback(
    function (value: string) {
      setCurrentDrawingMode(value);
    },
    [setCurrentDrawingMode]
  );

  const buttons = props.buttons.map((btn) =>
    btn.value === drawingMode
      ? { ...btn, onClick, isClicked: true }
      : { ...btn, onClick }
  );

  return (
    <div className="btn-group-vertical">
      <ButtonsList buttons={buttons} />
      <span>{drawingMode}</span>
    </div>
  );
}

export default DrawingPalette;
