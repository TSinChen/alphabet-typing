import { useState, useEffect, useMemo } from "react";

import { Input, Keyboard, Result } from "./components";

const A_TO_Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const App = () => {
  const [inputs, setInputs] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const isFinished = useMemo(() => inputs.toUpperCase() === A_TO_Z, [inputs]);
  const spentTime = useMemo(
    () => (endTime - startTime) / 1000,
    [startTime, endTime]
  );

  const validatedSetInputs = (input: string) => {
    if (A_TO_Z.startsWith(input)) {
      setInputs(input);
    }
  };

  const handleReset = () => {
    setInputs("");
  };

  useEffect(() => {
    setIsTyping(Boolean(inputs));
  }, [inputs]);

  useEffect(() => {
    if (isTyping) {
      setStartTime(new Date().getTime());
    }
  }, [isTyping]);

  useEffect(() => {
    if (isFinished) {
      setEndTime(new Date().getTime());
    }
  }, [isFinished]);

  return (
    <div className="container">
      <h1 className="title">From A to Z</h1>
      {isFinished ? (
        <Result spentTime={spentTime} handleReset={handleReset} />
      ) : (
        <Input inputs={inputs} validatedSetInputs={validatedSetInputs} />
      )}
      <Keyboard inputs={inputs} validatedSetInputs={validatedSetInputs} />
    </div>
  );
};

export default App;
