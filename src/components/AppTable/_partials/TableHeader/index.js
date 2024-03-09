import TableHeaderStyles from "./TableHeader.module.scss";

const TableHeader = ({ formatLabels, allowKeyArr }) => {
  return (
    <thead className={TableHeaderStyles?.tableHeadCover}>
      <tr className={TableHeaderStyles?.tableHeadCover__row}>
        {allowKeyArr?.map((list, index) => {
          return (
            <th
              className={TableHeaderStyles?.tableHeadCover__rowHead}
              key={index}
            >
              <div className={TableHeaderStyles?.tableHeadCover__rowList}>
                <div>{formatLabels[list]}</div>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHeader;
