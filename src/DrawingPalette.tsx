import React, { useState } from 'react';
import Button, { ButtonProps } from './Button';

//TODO: Extract the logic of selecting only one item from a list to a separated custom hook
/*
useOneActive // is a hook that has only one active element of `count` items
input: count
output: set(index: numnber), items: boolean[]

set(2) <= [false, false, true, false, false]
*/

/*
useButtonsState(count)
output: set(index: numnber), items: ButtonProps[]
*/

type InitialButtonProps = Omit<ButtonProps, 'onClick'>;

const initialButtons = (function () {
  const ret: InitialButtonProps[] = [];
  ret.push({ isClicked: true, value: "Nothing", originalColor: "lightgrey", clickedColor: "grey" });
  ret.push({ isClicked: false, value: "Point", originalColor: "#fe2636", clickedColor: "darkred" });
  ret.push({ isClicked: false, value: "Line", originalColor: "#f5dd33", clickedColor: "#f9a905" });
  ret.push({ isClicked: false, value: "Polygon", originalColor: "#90eb35", clickedColor: "green" });
  return ret;
})();

function DrawingPalette() {
  const onClick = function (value: string): void {
    //TODO: Change the current drawingContext
    const button = buttons.find(b => b.value === value);
    if (!button)
      throw Error(`value ${value} must be found!`);

    if (button.isClicked)
      throw Error(`this function should not be called if the button is already clicked!`);

    //set all buttons isClicked to false, except for the newly clicked button
    const newButtons = buttons.map(button => button.value === value ? { ...button, isClicked: true } : { ...button, isClicked: false });
    setButtons(newButtons);
  }
  const [buttons, setButtons] = useState(initialButtons);

  return <div className="btn-group-vertical">
    {buttons.map(button => <Button key={button.value} {...button} onClick={onClick} />)}
  </div>
}

export default DrawingPalette;