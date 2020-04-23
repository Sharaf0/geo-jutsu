import React from "react";
import Drawer from "./Drawer";
import DrawingPalette from "./DrawingPalette";
import "bootstrap/dist/css/bootstrap.min.css";
import { drawingModeContext } from "./DrawingModeContext";
import { StatesPlayer } from "./StatesPlayer";
import AlgorithmsList from "./AlgorithmsList";
import { useDrawingMode } from "./hooks/drawingMode.hook";

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
const algorithms = ["algo 1", "algo 2"];

function App() {
  const drawingMode = useDrawingMode();
  return (
    <drawingModeContext.Provider value={drawingMode}>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <AlgorithmsList names={algorithms} />
          </div>
          <div className="col-sm-6">
            <Drawer />
            <StatesPlayer />
          </div>
          <div className="col-sm-3">
            <DrawingPalette buttons={drawingButtons} />
          </div>
        </div>
      </div>
    </drawingModeContext.Provider>
  );
}

export default App;
