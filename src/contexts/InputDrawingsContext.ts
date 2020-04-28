import { createContext } from "react";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";

export interface InputDrawingsContext {
  inputPoints: Point[];
  inputSegments: Segment[];
  addPoint: (point: Point) => void;
  addPoints: (points: Point[]) => void,
  addSegment: (segment: Segment) => void;
  addSegments: (segments: Segment[]) => void,
}

export const DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE: InputDrawingsContext = {
  inputPoints: [],
  inputSegments: [],
  addPoint: (point: Point) => {},
  addPoints: (points: Point[]) => {},
  addSegment: (segment: Segment) => {},
  addSegments: (segments: Segment[]) => {},
};

export const inputDrawingsContext = createContext<InputDrawingsContext>(
  DEFAULT_INPUT_DRAWINGS_CONTEXT_VALUE
);
