import React, { useCallback } from "react";
import Button, { ButtonProps } from "./Button";

interface Props {
  buttons: ButtonProps[];
}

const ButtonsList = function (props: Props) {
  const onClick = useCallback(
    function (value: string): void {
      debugger;
      //TODO: Change the current drawingContext
      const button = props.buttons.find((b) => b.value === value);
      if (!button) throw Error(`value ${value} must be found!`);

      if (button.isClicked)
        throw Error(
          `this function should not be called if the button is already clicked!`
        );

      //set all buttons isClicked to false, except for the newly clicked button
      // const newButtons = props.buttons.map((button) =>
      //   button.value === value
      //     ? { ...button, isClicked: true }
      //     : { ...button, isClicked: false }
      // );
    },
    [props.buttons]
  );

  console.log("ButtonsList", props);

  return (
    <div>
      {props.buttons.map((button) => {
        const newButton = {
          ...button,
          onClick: (value: string) => {
            debugger;
            onClick(value);
            button.onClick(value);
          },
        };
        return <Button key={newButton.value} {...newButton}></Button>;
      })}
    </div>
  );
};

export { ButtonsList };
