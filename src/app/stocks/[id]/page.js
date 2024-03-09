import React from "react";

import { StockDetailsPage } from "@/dashboard";
import { GlobalContextProvider } from "@/context/store";

// export async function generateStaticParams() {
//   // return dynamic id for better optimization
// }

export const metadata = {
  title: "Stock Details",
};

const StockDetails = ({ params: { id } }) => {
  return (
    <GlobalContextProvider serverSideStockId={id}>
      <StockDetailsPage serverSideStockId={id} />
    </GlobalContextProvider>
  );
};

export default StockDetails;
