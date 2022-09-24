import { useMemo } from "react";

import { Record } from "../../utils/type";

type Props = {
  records: Record[];
};

const Records = ({ records }: Props) => {
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
