import { useState } from "react";
import { AlgorithmStepsContext } from "../contexts/AlgorithmStepsContext";
import Step from "../algorithms/step";
import IAlgorithm from "../algorithms/IAlgorithm";
import Point from "../business/Point";
import Segment from "../business/Segment";

export const useAlgorithmSteps = (): AlgorithmStepsContext => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentStep, setCurrentStep] = useState<Step | null>(null);
  const [allSteps, setAllSteps] = useState<Step[]>([]);

  const next = function () {
    if (currentIndex === allSteps.length - 1) return;
    setCurrentStep(allSteps[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
  };
  const prev = function () {
    if (currentIndex === 0) return;
    setCurrentStep(allSteps[currentIndex - 1]);
    setCurrentIndex(currentIndex - 1);
  };
  const run = function (
    algorithm: IAlgorithm,
    inputPoints: Point[],
    inputSegments: Segment[]
  ) {
    const firstStep = new Step();
    firstStep.pointsGroups = [inputPoints];
    firstStep.segmentsGroups = [inputSegments];
    const algorithmSteps = algorithm.Run(inputPoints, inputSegments);
    const steps = [firstStep, ...algorithmSteps];
    setAllSteps(steps);
    setCurrentStep(steps[0]);
    setCurrentIndex(0);
  };

  return {
    currentStep,
    currentStepNumber: currentIndex,
    stepsCount: allSteps.length,
    next,
    prev,
    run,
  };
};
