# Real-Time Dashboard Application

This project is a real-time dashboard application built with Next.js, featuring live data updates using WebSockets.

## Setup and Run

1. **Clone the Repository**:

git clone https://github.com/kennethoyahebholo/Realtime-Dashboard.git

cd Realtime-Dashboard

2. **Install Dependencies**:

npm install

This command will install all the necessary dependencies for the project. If you encounter any issues with npm version compatibility, ensure you have node version 18 or higher installed. Alternatively, you can use Node Version Manager (NVM) to manage multiple versions of Node.js on your machine.

To install NVM, follow the instructions provided on the official NVM repository: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

3. **Run the Project**:

npm run dev

This command will start both the Next.js development server and the WebSocket server.

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to view the application.

## State Management

For state management, this project uses the Context API provided by React. Global state is managed using the `GlobalContextProvider` component, which wraps the entire application. This approach was chosen for its simplicity and ease of integration with Next.js.

## Real-Time Updates with WebSockets

Real-time updates are achieved using WebSockets. The WebSocket server sends live stock data updates to connected clients. The client-side code establishes a WebSocket connection and listens for incoming updates, which are then displayed in real-time on the dashboard.

## Assumptions and Optimizations

- **SEO**: To optimize for SEO, dynamic routes are implemented for stock details pages, ensuring each page is crawlable by search engines. Metadata is provided for each page to improve search engine visibility.

- **Performance Optimization**: Performance optimizations include code splitting, image optimization, and server-side caching. This ensures fast page load times and a smooth user experience.

- **Build and Deployment**: Once the development is complete, you can build the project using:

npm run build

Then, to run the built package, use:

npm start

This command will start the production server with the optimized build.
