import React, { useContext } from "react";
import { algorithmStepsContext } from "./contexts/AlgorithmStepsContext";

export const StatesPlayer = function () {
  const { stepsCount, currentStepNumber, next, prev } = useContext(
    algorithmStepsContext
  );
  if (stepsCount === 0) return <></>;
  return (
    <>
      <br></br>
      <span>
        {currentStepNumber} / {stepsCount - 1}
      </span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <button type="button" className="btn btn-primary">
          {"<<"}
        </button> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={prev}
          disabled={currentStepNumber === 0}
        >
          {"<"}
        </button>
        <button type="button" className="btn btn-primary">
          {"Start"}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={next}
          disabled={currentStepNumber === stepsCount - 1}
        >
          {">"}
        </button>
        {/* <button type="button" className="btn btn-primary">
          {">>"}
        </button> */}
      </div>
      <div className="progress" style={{ marginTop: 20 }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{
            width: `${(100 * currentStepNumber) / (stepsCount - 1)}%`,
          }}
        ></div>
      </div>
    </>
  );
};
