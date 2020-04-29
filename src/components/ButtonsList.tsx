import React, { useCallback, useState, useEffect } from "react";
import Button, { ButtonProps } from "./Button";

interface Props {
  buttons: ButtonProps[];
}

const ButtonsList = function (props: Props) {
  const [buttons, setButtons] = useState<ButtonProps[]>([]);

  useEffect(() => {
    setButtons(props.buttons);
  }, [props.buttons]);

  const onClick = useCallback(
    function (value: string): void {
      //TODO: Change the current drawingContext
      const button = buttons.find((b: ButtonProps) => b.value === value);
      if (!button) throw Error(`value ${value} must be found!`);

      if (button.isClicked)
        throw Error(
          `this function should not be called if the button is already clicked!`
        );

      const newButtons = buttons.map((button: ButtonProps) =>
        button.value === value
          ? { ...button, isClicked: true }
          : { ...button, isClicked: false }
      );
      setButtons(newButtons);
    },
    [buttons]
  );

  return (
    <div>
      {buttons.map((button: ButtonProps) => {
        const newButton = {
          ...button,
          onClick: (value: string) => {
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
