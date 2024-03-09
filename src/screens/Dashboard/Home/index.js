"use client";

import React from "react";

import { PageHeader } from "@/components";
import { DashboardLayout } from "../_partials";
import { useGlobalContext } from "@/context/store";
import { AreaChartCanvas, BarChartCanvas } from "./_partials";

import styles from "./Home.module.scss";

const Home = () => {
  const { stocks: data } = useGlobalContext();
  const user = {
    firstName: "Oyahebholo",
    lastName: "Kenneth",
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Welcome"
        name={`${user?.firstName} ${user?.lastName}`}
      />
      <div className={styles.wrapper}>
        <AreaChartCanvas data={data} />
        <BarChartCanvas data={data} />
      </div>
    </DashboardLayout>
  );
};

export default Home;
