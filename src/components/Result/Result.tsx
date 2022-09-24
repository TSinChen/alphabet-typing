import Button from "../Button/Button";

type Props = {
  spentTime: number;
  handleReset: () => void;
};

const Result = ({ spentTime, handleReset }: Props) => {
  return (
    <div className="result">
      <div className="result__text">You spent {spentTime} seconds.</div>
      <div className="result__actions">
        <Button onClick={handleReset}>Try again</Button>
      </div>
    </div>
  );
};

export default Result;
