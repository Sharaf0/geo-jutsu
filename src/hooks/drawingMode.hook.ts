import { useCallback, useState } from "react";
import {
  DrawingModeContext,
  DEFAULT_DRAWING_MODE_VALUE,
} from "../contexts/DrawingModeContext";

export const useDrawingMode = (): DrawingModeContext => {
  const [drawingMode, setDrawingMode] = useState(
    DEFAULT_DRAWING_MODE_VALUE.drawingMode
  );

  const setCurrentDrawingMode = useCallback((newDrawingMode: string): void => {
    setDrawingMode(newDrawingMode);
  }, []);

  return {
    drawingMode,
    setCurrentDrawingMode,
  };
};
