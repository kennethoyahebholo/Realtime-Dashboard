"use client";

import React from "react";

import { useGlobalContext } from "@/context/store";
import { DashboardLayout } from "@/screens/Dashboard/_partials";
import { PageHeader } from "@/components";
import { AllStocks } from "./_partials";

const Stocks = () => {
  const { stocks, setSelectedStockId } = useGlobalContext();

  return (
    <DashboardLayout>
      <PageHeader title="Welcome" name="Stocks" />
      <AllStocks content={stocks} setSelectedStockId={setSelectedStockId} />
    </DashboardLayout>
  );
};

export default Stocks;
