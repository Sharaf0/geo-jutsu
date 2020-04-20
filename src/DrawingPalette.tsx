import React, { useState } from 'react';
import Button, { ButtonProps } from './Button';

function DrawingPalette() {
  //TODO: Extract the logic of selecting only one item from a list to a separated custom hook
  const getButtons = function (): Array<ButtonProps> {
    const ret = new Array<ButtonProps>();
    ret.push({ onClick, isClicked: true, value: "Nothing", originalColor: "lightgrey", clickedColor: "grey" });
    ret.push({ onClick, isClicked: false, value: "Point", originalColor: "#fe2636", clickedColor: "darkred" });
    ret.push({ onClick, isClicked: false, value: "Line", originalColor: "#f5dd33", clickedColor: "#f9a905" });
    ret.push({ onClick, isClicked: false, value: "Polygon", originalColor: "#90eb35", clickedColor: "green" });
    return ret;
  }
  const onClick = function (value: string): void {
    const button = buttons.find(b => b.value === value);
    if(!button)
      throw Error(`value ${value} must be found!`);
    
    if(button.isClicked)
      throw Error(`this function should not be called if the button is already clicked!`);

    //set all buttons isClicked to false, except for the newly clicked button
    const newButtons = buttons.map(button => button.value === value ? {...button, isClicked: true} : {...button, isClicked: false});
    setButtons(newButtons);
  }

  const [buttons, setButtons] = useState(getButtons());

  return <div className="btn-group-vertical">
    {buttons.map(button => <Button key={button.value} {...button} />)}
  </div>
}

export default DrawingPalette;