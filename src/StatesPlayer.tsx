import React from "react";

export const StatesPlayer = function () {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" className="btn btn-primary">
          {"<<"}
        </button>
        <button type="button" className="btn btn-primary">
          {"<"}
        </button>
        <button type="button" className="btn btn-primary">
          {"Start"}
        </button>
        <button type="button" className="btn btn-primary">
          {">"}
        </button>
        <button type="button" className="btn btn-primary">
          {">>"}
        </button>
      </div>
      <br></br>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: "75%" }}
        ></div>
      </div>
    </>
  );
};
