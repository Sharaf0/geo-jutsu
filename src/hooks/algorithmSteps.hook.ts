import { useState, useEffect, useCallback } from "react";
import { AlgorithmStepsContext } from "../contexts/AlgorithmStepsContext";
import Step from "../algorithms/step";
import IAlgorithm from "../algorithms/IAlgorithm";
import Point from "../dataStructures/Point";
import Segment from "../dataStructures/Segment";

export const useAlgorithmSteps = (): AlgorithmStepsContext => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentStep, setCurrentStep] = useState<Step | null>(null);
  const [allSteps, setAllSteps] = useState<Step[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const next = useCallback(() => {
    if (currentIndex === allSteps.length - 1) return;
    setCurrentStep(allSteps[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
  }, [allSteps, currentIndex]);

  useEffect(() => {
    if (!isRunning) return;
    console.log(currentIndex);
    setTimeout(() => {
      next();
    }, 100);
    // return () => {
    //   debugger;
    //   clearTimeout(to);
    // };
  }, [isRunning, currentIndex]);

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

  const stop = function () {
    setIsRunning(false);
  };

  const start = function () {
    setIsRunning(true);
  };

  return {
    currentStep,
    currentStepNumber: currentIndex,
    stepsCount: allSteps.length,
    next,
    prev,
    run,
    stop,
    isRunning,
    start,
  };
};
