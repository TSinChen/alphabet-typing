import { useMemo } from "react";

import { Record } from "../../utils/type";
import Button from "../Button/Button";

type Props = {
  records: Record[];
  clearRecords: () => void;
};

const Records = ({ records, clearRecords }: Props) => {
  const bestIndex = useMemo(
    () =>
      records.reduce(
        (prev, curr, i) => (curr.time < records[prev].time ? i : prev),
        0
      ),
    [records]
  );

  return (
    <div className="records">
      <div className="records__button">
        <Button onClick={clearRecords} size="small">
          {`Clear Record${records.length > 0 ? "s" : ""}`}
        </Button>
      </div>
      <ul className="records__list">
        {records.map((record, index) => (
          <li key={record.date} className="records__item">
            <div className="records__date">{record.date}</div>
            <div
              className={`records__time${index === bestIndex ? " best" : ""}`}
            >
              ...{record.time} s
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Records;
