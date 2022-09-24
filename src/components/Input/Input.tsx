type Props = {
  inputs: string;
  validatedSetInputs: (input: string) => void;
};

const Input = ({ inputs, validatedSetInputs }: Props) => {
  return (
    <input
      className="input"
      value={inputs}
      onChange={(e) => validatedSetInputs(e.target.value.toUpperCase())}
      onPaste={(e) => e.preventDefault()}
      placeholder={`Getting start with 'A'`}
      disabled={inputs.length === 26}
    />
  );
};

export default Input;
