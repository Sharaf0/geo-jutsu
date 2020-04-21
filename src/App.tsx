import React from 'react';
import Drawer from './Drawer';
import DrawingPalette from './DrawingPalette';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DrawingContext } from "./DrawingContext";
import { StatesPlayer } from './StatesPlayer';
import AlgorithmsList from './AlgorithmsList';

function App() {
  return (
    <DrawingContext.Provider value={'Nothing'}>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <AlgorithmsList names={['algo 1', 'algo 2']} />
          </div>
          <div className="col-sm-6">
            <Drawer />
            <StatesPlayer />
          </div>
          <div className="col-sm-3">
            <DrawingPalette />
          </div>
        </div>
      </div>
    </DrawingContext.Provider>

  );
}

export default App;
