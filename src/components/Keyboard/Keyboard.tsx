import { useCallback } from "react";
import { isTyped } from "../../utils/helper";

type Props = {
  inputs: string;
  validatedSetInputs: (input: string) => void;
};

const KEYBOARD = {
  row1: "QWERTYUIOP",
  row2: "ASDFGHJKL",
  row3: "ZXCVBNM",
};

const Keyboard = ({ inputs, validatedSetInputs }: Props) => {
  const getKeyStatusClass = useCallback(
    (key: string) => {
      if (isTyped(inputs, key)) return "typed";
      return "";
    },
    [inputs]
  );

  const handleKeyClick = (key: string) => {
    if (!isTyped(inputs, key)) {
      validatedSetInputs(inputs + key);
    }
  };

  return (
    <div className="keyboard">
      {Object.entries(KEYBOARD).map(([row, keys]) => (
        <div className="keyboard__row" key={row}>
          {keys.split("").map((key) => (
            <div
              className={`keyboard__key ${getKeyStatusClass(key)}`}
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
