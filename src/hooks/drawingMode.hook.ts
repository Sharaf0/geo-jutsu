import React from "react";
import {
  DrawingModeContext,
  DEFAULT_DRAWING_MODE_VALUE,
} from "../DrawingModeContext";

export const useDrawingMode = (): DrawingModeContext => {
  const [drawingMode, setDrawingMode] = React.useState(
    DEFAULT_DRAWING_MODE_VALUE.drawingMode
  );

  const setCurrentDrawingMode = React.useCallback(
    (newDrawingMode: string): void => {
      setDrawingMode(newDrawingMode);
    },
    []
  );

  return {
    drawingMode,
    setCurrentDrawingMode,
  };
};
