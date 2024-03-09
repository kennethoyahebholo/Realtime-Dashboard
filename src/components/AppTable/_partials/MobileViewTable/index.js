import React from "react";
import Link from "next/link";

import truncateData from "@/utils/truncateData";

import MobileViewTableStyles from "./MobileViewTable.module.scss";

const MobileViewTable = ({ content, allowKeyArr, hasOnclick }) => {
  return allowKeyArr?.map((list, index) => {
    const checkIfEleIsArray = Array?.isArray(list);

    return (
      <div key={index} className={MobileViewTableStyles?.mobileViewDataCover}>
        <Link
          href={{
            pathname: "/dashboard/stocks/stock-details",
            query: { id: `${content?.id}` },
          }}
        >
          {checkIfEleIsArray &&
            list?.map((values, indexData) => {
              return (
                <div
                  key={indexData}
                  className={
                    MobileViewTableStyles?.mobileViewDataCover__mobileViewDoubleRec
                  }
                >
                  {truncateData(content?.[values], 16)}
                </div>
              );
            })}
        </Link>
      </div>
    );
  });
};
export default MobileViewTable;
