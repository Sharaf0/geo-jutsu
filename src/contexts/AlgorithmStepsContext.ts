import React from "react";
import Step from "../algorithms/step";
import IAlgorithm from "../algorithms/IAlgorithm";
import Point from "../business/Point";
import Segment from "../business/Segment";

export interface AlgorithmStepsContext {
  currentStep: Step | null;
  currentStepNumber: number;
  stepsCount: number;
  next: () => void;
  prev: () => void;
  run: (
    algorithm: IAlgorithm,
    inputPoints: Point[],
    inputSegments: Segment[]
  ) => void;
}

export const DEFAULT_ALGORITHM_STEPS_CONTEXT_VALUE: AlgorithmStepsContext = {
  currentStep: null,
  currentStepNumber: -1,
  stepsCount: 0,
  next: () => {},
  prev: () => {},
  run: (
    algorithm: IAlgorithm,
    inputPoints: Point[],
    inputSegments: Segment[]
  ) => {},
};

export const algorithmStepsContext = React.createContext<AlgorithmStepsContext>(
  DEFAULT_ALGORITHM_STEPS_CONTEXT_VALUE
);
