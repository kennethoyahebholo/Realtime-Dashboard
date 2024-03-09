# Real-Time Dashboard Application

This project is a real-time dashboard application built with Next.js, featuring live data updates using WebSockets.

## Setup and Run

1. **Clone the Repository**:

2. **Install Dependencies**:

3. **Run the Project**:
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
