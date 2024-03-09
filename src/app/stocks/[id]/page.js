import React from "react";

import StocksDetailsPage from "@/screens/Dashboard/StockDetails";
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
      <StocksDetailsPage serverSideStockId={id} />
    </GlobalContextProvider>
  );
};

export default StockDetails;
