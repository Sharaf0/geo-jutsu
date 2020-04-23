import React from "react";
import { ButtonsList } from "./ButtonsList";
interface AlgorithmsListPropTypes {
  names: string[];
}

const AlgorithmsList = function (props: AlgorithmsListPropTypes) {
  const onClick = function (value: string) {
    console.log(`algorithm: ${value}`);
  };
  const buttons = props.names.map((name) => ({
    value: name,
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
