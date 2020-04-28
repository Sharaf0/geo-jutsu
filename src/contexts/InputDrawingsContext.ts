import { createContext } from "react";
import Point from "../business/Point";
import Segment from "../business/Segment";

export interface InputDrawingsContext {
  inputPoints: Point[];
  inputSegments: Segment[];
  addPoint: (point: Point) => void;
  addSegment: (segment: Segment) => void;
}

export const DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE: InputDrawingsContext = {
  inputPoints: [],
  inputSegments: [],
  addPoint: (point: Point) => {},
  addSegment: (segment: Segment) => {},
};

export const inputDrawingsContext = createContext<InputDrawingsContext>(
  DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE
);
