const { WebSocketServer, WebSocket } = require("ws");

// Import the stocks array from the external file
const stocks = require("./stocksData");
// Create a WebSocket server
const wss = new WebSocketServer({ port: 8080 });

function sendStockUpdates() {
  // Update the prices of each stock
  stocks.forEach((stock) => {
    // Simulate price changes
    stock.price += Math.random() * 10 - 5;
    // Simulate profit and loss changes
    stock.profit += Math.random() * 10000 - 5000;
    stock.loss += Math.random() * 5000 - 2500;
  });

  // Stringify the entire array of stocks with updated prices
  const updatedStocks = JSON.stringify(stocks);

  // Send the updated stock data to all connected clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(updatedStocks);
    }
  });
}

// Event listener for new connections
wss.on("connection", function connection(ws) {
  console.log("New client connected");

  // Event listener for errors
  ws.on("error", function error(error) {
    console.error("WebSocket error:", error);
  });

  // Event listener for incoming messages (optional)
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  // Send the initial stock data to the client upon connection
  sendStockUpdates();

  // Function to periodically send mock stock updates to the client
  const interval = setInterval(sendStockUpdates, 3000);

  // Cleanup function to stop the interval when the client disconnects
  ws.on("close", function close() {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});
