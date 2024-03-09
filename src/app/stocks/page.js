import React from "react";
import StocksPage from "@/screens/Dashboard/Stocks";

export const metadata = {
  title: "Stocks",
};

// export async function generateStaticParams() {
//   // return dynamic id for better optimization
// }

// dynamic meta data; can only be exported from a server component.
// export async function generateMetadata() {
//   return {
//     title: "",
//     description: "",
//     openGraph: {
//       images: [
//         {
//           url: "",
//         },
//       ],
//     },
//   };
// }

const Stocks = async () => {
  return <StocksPage />;
};
export default Stocks;
