import React from 'react';
import Button from './Button';

interface AlgorithmsListPropTypes {
  names: string[]
};

const AlgorithmsList = function (props: AlgorithmsListPropTypes) {
  const onClick = function (value: string) {

  }
  return (
    <>
      <h2>Algorithms</h2>
      <div>
        {props.names.map(algo =>
          <Button
            key={algo}
            value={algo}
            onClick={onClick}
            originalColor="lightblue"
            clickedColor="darkblue"
            isClicked={false} />
        )}
      </div>
    </>
  );
};



export default AlgorithmsList;