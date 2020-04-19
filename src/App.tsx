import React from 'react';
import Drawer from './Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
        </div>
        <div className="col-sm-6">
          <Drawer />
        </div>
        <div className="col-sm-3">
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
