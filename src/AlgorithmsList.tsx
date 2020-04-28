import React, { useContext } from "react";
import { ButtonsList } from "./ButtonsList";
import IAlgorithm from "./algorithms/IAlgorithm";
import { algorithmStepsContext } from "./contexts/AlgorithmStepsContext";
import { inputDrawingsContext } from "./contexts/InputDrawingsContext";
interface AlgorithmsListPropTypes {
  algorithms: IAlgorithm[];
}

const AlgorithmsList = function (props: AlgorithmsListPropTypes) {
  const { run } = useContext(algorithmStepsContext);
  const { inputPoints, inputSegments } = useContext(inputDrawingsContext);
  const onClick = function (value: string) {
    const algorithm = props.algorithms.find((algo) => algo.Name() === value);
    if (!algorithm) throw Error(`Algorithm ${value} must be found`);
    run(algorithm, inputPoints, inputSegments);
  };
  const buttons = props.algorithms.map((algorithm) => ({
    value: algorithm.Name(),
    //TODO: Get those from config.
    clickedColor: "darkblue",
    originalColor: "lightblue",
    isClicked: false,
    onClick: onClick,
  }));
  return (
    <>
      <h2>Algorithms</h2>
      <ButtonsList buttons={buttons} />
    </>
  );
};

export default AlgorithmsList;
