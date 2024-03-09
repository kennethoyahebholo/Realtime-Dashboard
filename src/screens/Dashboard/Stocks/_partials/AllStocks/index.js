import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { AppTable } from "@/components";
import ArrowheadIcon from "@/assets/svg_components/ArrowheadIcon";

const limit = 10;
const AllStocks = ({ content }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const setPageNumber = (pageNum) => {
    if (pageNum < 1) pageNum = 1; // Ensure page number is at least 1
    const totalPages = Math.ceil(content?.length / 10);
    if (pageNum > totalPages) pageNum = totalPages; // Ensure page number doesn't exceed total pages

    setPage(pageNum);
    router.push(`/stocks?page=${pageNum}`);
  };
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const contentItems = Array.isArray(content)
    ? content.slice(startIndex, endIndex)
    : [];

  const tableTitles = {
    id: "ID",
    companyName: "Company Name",
    symbol: "Symbol",
    location: "Location",
    address: "Address",
    price: "Price",
    profit: "Profit",
    loss: "Loss",
  };

  const allColumn = [
    "id",
    "companyName",
    "symbol",
    "location",
    "address",
    "price",
    "profit",
    "loss",
  ];

  const allColumnForMobile = [
    "companyName",
    ["symbol", "price"],
    ["profit", ""],
  ];

  const onButtonClick = (content) => {
    router.push(`/stocks/${content?.id}`);
  };

  return (
    <div>
      <div>
        <AppTable
          content={contentItems}
          allColumnForMobile={allColumnForMobile}
          allColumn={allColumn}
          tableTitles={tableTitles}
          page={page}
          pageSize={limit}
          count={content?.length}
          setPage={setPageNumber}
          emptyTableTitle="No Stocks"
          emptyTableSubTitle="All stocks and their details will appear here."
          showActionBtn
          hasActionIcon
          hasOnclick={onButtonClick}
          actionIcon={<ArrowheadIcon fillColor="#ffff" />}
          showToolTip
        />
      </div>
    </div>
  );
};
export default AllStocks;
