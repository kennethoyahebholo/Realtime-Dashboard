"use client";

import React from "react";

import { PageHeader } from "@/components";
import { useGlobalContext } from "@/context/store";
import { DashboardLayout } from "@/screens/Dashboard/_partials";
import {
  BarChartCanvas,
  PieChartCanvas,
  DomainRadarChart,
  AreaChartCanvas,
} from "./_partials";
import formatCash from "@/utils/formatAmount";

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

const StockDetails = ({ serverSideStockId }) => {
  const { stocks } = useGlobalContext();

  const selectedStock = stocks?.find(
    (stock) => Number(stock?.id) === Number(serverSideStockId)
  );

  const data = [
    {
      name: selectedStock?.companyName,
      price: selectedStock?.price,
      profit: selectedStock?.profit,
      loss: selectedStock?.loss,
      // price: selectedStock?.price.toFixed(2),
      // profit: selectedStock?.profit.toFixed(2),
      // loss: selectedStock?.loss.toFixed(2),
    },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Real-Time Data" name={selectedStock?.companyName} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: "1",
          alignItems: "center",
          height: "500px",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: ".4",
            height: "100%",
            width: "100%",
          }}
        >
          <BarChartCanvas data={data} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            width: "100%",
            flex: ".3",
          }}
        >
          <PieChartCanvas data={data} />
          <DomainRadarChart data={data} />
        </div>
        <div
          style={{
            height: "300px",
            width: "100%",
            flex: ".3",
          }}
        >
          <AreaChartCanvas data={data} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StockDetails;
