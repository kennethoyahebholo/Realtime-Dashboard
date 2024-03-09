import Empty from "@/assets/images/empty.png";

import AppTableStyles from "./AppTable.module.scss";
import {
  EmptyTableRecord,
  MobileViewTable,
  Pagination,
  TableBody,
  TableHeader,
} from "./_partials";

const AppTable = ({
  content,
  allColumnForMobile,
  allColumn,
  tableTitles,
  page,
  pageSize,
  count,
  setPage,
  hasActionIcon,
  hasOnclick,
  actionIcon,
  emptyTableTitle,
  emptyTableSubTitle,
  showToolTip,
  toolTipPosition,
  toolTipContent,
  linkTo,
}) => {
  return (
    <div className={AppTableStyles?.tableWrapper}>
      {count ? (
        <div>
          <div className={AppTableStyles?.tableWrapper__mobileViewWrapper}>
            {content?.map((list, index) => (
              <div
                className={AppTableStyles.tableWrapper__mobileView}
                key={index}
              >
                <MobileViewTable
                  content={list}
                  allowKeyArr={allColumnForMobile}
                  hasOnclick={hasOnclick}
                />
              </div>
            ))}
          </div>
          <div className={AppTableStyles.tableWrapper__tableCover}>
            <table className={AppTableStyles.tableWrapper__table}>
              <TableHeader
                allowKeyArr={allColumn}
                formatLabels={tableTitles}
                hasActionIcon
              />
              {content?.map((list, index) => (
                <TableBody
                  content={list}
                  key={index}
                  allowKeyArr={allColumn}
                  hasActionIcon={hasActionIcon}
                  hasOnclick={hasOnclick}
                  actionIcon={actionIcon}
                  showToolTip={showToolTip}
                  toolTipPosition={toolTipPosition}
                  toolTipContent={toolTipContent}
                  linkTo={linkTo}
                />
              ))}
            </table>
          </div>

          {count > pageSize && (
            <div className={AppTableStyles.tableWrapper__paginationCover}>
              <Pagination
                setPage={setPage}
                page={page}
                pageSize={pageSize}
                count={count}
              />
            </div>
          )}
        </div>
      ) : (
        <EmptyTableRecord
          icon={Empty}
          title={emptyTableTitle || ""}
          subtitle={emptyTableSubTitle || ""}
        />
      )}
    </div>
  );
};
export default AppTable;
