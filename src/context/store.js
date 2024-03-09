"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// Create a context to manage the global state
const GlobalContext = createContext({
  isShowSidebar: false,
  setIsShowSidebar: () => false,
  stocks: [],
  stockId: "",
});

// Custom hook to access the global context
export const useGlobalContext = () => useContext(GlobalContext);

// Global context provider component
export const GlobalContextProvider = ({
  children,
  serverSideStocksData,
  serverSideStockId,
}) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [stocks, setStocks] = useState(serverSideStocksData);

  const getUpdatedStocks = useCallback(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      const updatedStocks = JSON.parse(event.data);
      console.log(updatedStocks, "updatedStocks");
      setStocks(updatedStocks);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    getUpdatedStocks();
  }, [getUpdatedStocks]);

  // Provide the state and updater function to children components via context
  return (
    <GlobalContext.Provider
      value={{
        isShowSidebar,
        setIsShowSidebar,
        stocks,
        stockId: serverSideStockId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
