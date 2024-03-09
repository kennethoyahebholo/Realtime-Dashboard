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

import styles from "./styles.module.scss";

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
    },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        hasBackButton
        linkBackTo="/stocks"
        title="Real-Time Data"
        name={selectedStock?.companyName}
      />
      <div className={styles.wrapper}>
        <div className={styles.wrapper__chartContainer}>
          <div className={styles.wrapper__chart}>
            <h4>Bar Chart</h4>
            <BarChartCanvas data={data} />
          </div>
          <div className={styles.wrapper__chart}>
            <h4>Area Chart</h4>
            <AreaChartCanvas data={data} />
          </div>
        </div>
        <div className={styles.wrapper__chartContainer}>
          <div className={styles.wrapper__chart}>
            <h4>Pie Chart</h4>
            <PieChartCanvas data={data} />
          </div>
          <div className={styles.wrapper__chart}>
            <h4>Domain Radar Chart</h4>
            <DomainRadarChart data={data} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StockDetails;
