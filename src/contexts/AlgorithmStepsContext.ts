import React from "react";
import Step from "../algorithms/step";
import IAlgorithm from "../algorithms/IAlgorithm";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";

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
  start: () => void;
  stop: () => void;
  isRunning: boolean;
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
  start: () => {},
  stop: () => {},
  isRunning: false
};

export const algorithmStepsContext = React.createContext<AlgorithmStepsContext>(
  DEFAULT_ALGORITHM_STEPS_CONTEXT_VALUE
);
