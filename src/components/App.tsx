import React from "react";
import DrawingArea from "./DrawingArea";
import DrawingPalette from "./DrawingPalette";
import "bootstrap/dist/css/bootstrap.min.css";
import { drawingModeContext } from "../contexts/DrawingModeContext";
import { algorithmStepsContext } from "../contexts/AlgorithmStepsContext";
import { inputDrawingsContext } from "../contexts/InputDrawingsContext";
import { StatesPlayer } from "./StatesPlayer";
import AlgorithmsList from "./AlgorithmsList";
import { useDrawingMode } from "../hooks/drawingMode.hook";
import { useAlgorithmSteps } from "../hooks/algorithmSteps.hook";
import AlgorithmsFactory from "../algorithms/algorithmsFactory";
import { useInputDrawings } from "../hooks/inputDrawings.hook";

//TODO: Move that to config.
const drawingButtons = (function () {
  const ret = [
    {
      isClicked: false,
      value: "Nothing",
      originalColor: "lightgrey",
      clickedColor: "grey",
    },
    {
      isClicked: false,
      value: "Point",
      originalColor: "#fe2636",
      clickedColor: "darkred",
    },
    {
      isClicked: false,
      value: "Line",
      originalColor: "#f5dd33",
      clickedColor: "#f9a905",
    },
    {
      isClicked: false,
      value: "Polygon",
      originalColor: "#90eb35",
      clickedColor: "green",
    },
  ];
  return ret;
})();

function App() {
  const algorithmFactory = new AlgorithmsFactory();
  return (
    <inputDrawingsContext.Provider value={useInputDrawings()}>
      <algorithmStepsContext.Provider value={useAlgorithmSteps()}>
        <drawingModeContext.Provider value={useDrawingMode()}>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <AlgorithmsList algorithms={algorithmFactory.getAll()} />
              </div>
              <div className="col-sm-6">
                <DrawingArea />
                <StatesPlayer />
              </div>
              <div className="col-sm-3">
                <DrawingPalette buttons={drawingButtons} />
              </div>
            </div>
          </div>
        </drawingModeContext.Provider>
      </algorithmStepsContext.Provider>
    </inputDrawingsContext.Provider>
  );
}

export default App;
