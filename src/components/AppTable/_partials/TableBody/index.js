import { Tooltip as ReactTooltip } from "react-tooltip";

import formatCash from "@/utils/formatAmount";
import truncateData from "@/utils/truncateData";

import TableBodyStyles from "./TableBody.module.scss";

const TableBody = ({
  content,
  allowKeyArr,
  hasActionIcon,
  hasOnclick,
  actionIcon,
  showToolTip,
  toolTipPosition = "top",
  toolTipContent = "View details",
}) => {
  return (
    <tbody className={TableBodyStyles?.tableBodyCover}>
      <tr className={TableBodyStyles?.tableBodyCover__row}>
        {allowKeyArr?.map((ele, index) => {
          const color = () => {
            let cl;
            if (ele === "loss") {
              cl = "rgb(203, 6, 6)";
            } else if (ele === "profit") {
              cl = "rgb(5, 171, 5)";
            } else if (ele === "price") {
              cl = "rgb(16, 206, 206)";
            }
            return cl;
          };

          const amount = ["loss", "profit", "price"];

          if (amount?.includes(ele)) {
            return (
              <td
                key={index}
                className={TableBodyStyles?.tableBodyCover__td}
                style={{
                  color: color(),
                }}
                onClick={() => hasOnclick?.(content)}
              >
                <p>{formatCash(content?.[ele], "$")}</p>
              </td>
            );
          }
          return (
            <td
              key={index}
              className={TableBodyStyles?.tableBodyCover__td}
              onClick={() => hasOnclick?.(content)}
            >
              <p>{truncateData(content?.[ele], 18)}</p>
            </td>
          );
        })}
        {hasActionIcon && (
          <td onClick={() => hasOnclick?.(content)}>
            <span data-tooltip-id="actionIcon-tooltip">
              {actionIcon}
              {showToolTip && (
                <>
                  <ReactTooltip
                    id="actionIcon-tooltip"
                    place={toolTipPosition}
                    content={toolTipContent}
                    className={TableBodyStyles?.tableBodyCover__tableTooltip}
                  />
                </>
              )}
            </span>
          </td>
        )}
      </tr>
    </tbody>
  );
};
export default TableBody;
