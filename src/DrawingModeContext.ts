import React from "react";

export interface DrawingModeContext {
  drawingMode: string;
  setCurrentDrawingMode: (currentDrawingMode: string) => void;
}

export const DEFAULT_DRAWING_MODE_VALUE = {
  drawingMode: "Nothing",
  setCurrentDrawingMode: () => {},
};

export const drawingModeContext = React.createContext<DrawingModeContext>(
  DEFAULT_DRAWING_MODE_VALUE
);
