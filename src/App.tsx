import React from "react";
import DrawingArea from "./DrawingArea";
import DrawingPalette from "./DrawingPalette";
import "bootstrap/dist/css/bootstrap.min.css";
import { drawingModeContext } from "./DrawingModeContext";
import { StatesPlayer } from "./StatesPlayer";
import AlgorithmsList from "./AlgorithmsList";
import { useDrawingMode } from "./hooks/drawingMode.hook";
import AlgorithmsFactory from "./algorithms/algorithmsFactory";

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
  const drawingMode = useDrawingMode();
  const algorithmFactory = new AlgorithmsFactory();
  //TODO:
  //const [algoStepsIterator, setAlgoStepsIterator] = useState();
  return (
    <drawingModeContext.Provider value={drawingMode}>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <AlgorithmsList algorithms={algorithmFactory.getAll()} />
          </div>
          <div className="col-sm-6">
            <DrawingArea currentStep={null} />
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
