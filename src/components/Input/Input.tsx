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
      placeholder={`Getting start with 'A'`}
    />
  );
};

export default Input;
