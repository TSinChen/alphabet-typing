import { useState } from "react";

import { Input, Keyboard } from "./components";

const A_TO_Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const App = () => {
  const [inputs, setInputs] = useState("");

  const validatedSetInputs = (input: string) => {
    if (A_TO_Z.startsWith(input)) {
      setInputs(input);
    }
  };

  return (
    <div className="container">
      <Input inputs={inputs} validatedSetInputs={validatedSetInputs} />
      <Keyboard inputs={inputs} validatedSetInputs={validatedSetInputs} />
    </div>
  );
};

export default App;
