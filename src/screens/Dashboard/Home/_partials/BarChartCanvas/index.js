import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import styles from "./BarChartCanvas.module.scss";

const BarChartCanvas = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Bar Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="companyName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#82ca9d" />
          <Bar dataKey="loss" fill="red" />
          <Bar dataKey="profit" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCanvas;
