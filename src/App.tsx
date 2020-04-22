import React from "react";
import Drawer from "./Drawer";
import DrawingPalette from "./DrawingPalette";
import "bootstrap/dist/css/bootstrap.min.css";
import { DrawingContext } from "./DrawingContext";
import { StatesPlayer } from "./StatesPlayer";
import AlgorithmsList from "./AlgorithmsList";

//TODO: Move that to config.
const drawingButtons = (function () {
  const ret = [
    {
      isClicked: true,
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
  return (
    <DrawingContext.Provider value={"Nothing"}>
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
    </DrawingContext.Provider>
  );
}

export default App;
