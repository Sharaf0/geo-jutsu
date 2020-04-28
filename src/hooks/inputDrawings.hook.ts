import {
  DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE,
  InputDrawingsContext,
} from "../contexts/InputDrawingsContext";
import { useState, useCallback } from "react";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";

export const useInputDrawings = (): InputDrawingsContext => {
  const [inputPoints, setInputPoints] = useState(
    DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE.inputPoints
  );

  const [inputSegments, setInputSegments] = useState(
    DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE.inputSegments
  );

  const addPoint = useCallback(
    (point: Point): void => {
      setInputPoints([...inputPoints, point]);
    },
    [inputPoints]
  );

  const addSegment = useCallback(
    (segment: Segment): void => {
      setInputSegments([...inputSegments, segment]);
    },
    [inputSegments]
  );

  // const clearAll = useCallback(() => {
  //   setInputPoints(DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE.inputPoints);
  //   setInputSegments(DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE.inputSegments);
  // }, []);

  return {
    addPoint,
    addSegment,
    inputPoints,
    inputSegments,
  };
};
