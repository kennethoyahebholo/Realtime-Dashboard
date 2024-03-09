export const getStocks = (updateCallback) => {
  let arr = [];
  const ws = new WebSocket("ws://localhost:8080");

  ws.onopen = () => {
    console.log("WebSocket connection established");
  };

  ws.onmessage = (event) => {
    const updatedStocks = JSON.parse(event.data);
    arr = updatedStocks;
    if (updateCallback) {
      updateCallback(arr);
    }
  };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  // Create a function to close the websocket connection
  const closeWebSocket = () => {
    ws.close();
  };

  // Return the closeWebSocket function
  return closeWebSocket;
};
