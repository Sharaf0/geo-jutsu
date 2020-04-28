import { createContext } from "react";

export interface DrawingModeContext {
  drawingMode: string;
  setCurrentDrawingMode: (currentDrawingMode: string) => void;
}

export const DEFAULT_DRAWING_MODE_VALUE = {
  drawingMode: "Point",
  setCurrentDrawingMode: () => {},
};

export const drawingModeContext = createContext<DrawingModeContext>(
  DEFAULT_DRAWING_MODE_VALUE
);
