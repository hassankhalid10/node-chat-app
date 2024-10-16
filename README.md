
# Node Chat App

A simple real-time chat application built using **Node.js**, **Express**, **Socket.IO**, and **vanilla JavaScript**. This app allows multiple users to join and chat in real-time through web sockets, with messages broadcasted to all connected users.

## Features

- Real-time communication between multiple users.
- Broadcasts messages to all users except the sender.
- Built with minimal dependencies using vanilla JavaScript for the frontend.
- Lightweight and easy to deploy.

## Installation

To get started with this project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/node-chat-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd node-chat-app
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   By default, the application will run on port `3000`. If port `3000` is already in use, it will use the environment variable `PORT`.

## Running the Application

Once the server is running, open a browser and go to:
```
http://localhost:3000
```

### How Multiple People Can Chat:

1. Open the URL `http://localhost:3000` in one browser window or tab.
2. To simulate multiple users:
   - Open additional browser windows, tabs, or even different devices connected to the same network and access the same URL.
   - Each client (user) will be connected to the server and able to chat in real-time with the others.
   
3. Start chatting by typing messages. The messages will be broadcasted to all connected users except the sender.

## How it Works

The chat app is built using `Socket.IO`, which provides a WebSocket connection between the server and clients. When a user sends a message:
- The message is emitted by the client to the server.
- The server then broadcasts this message to all connected clients (except the one who sent the message).

## Technologies Used

- **Node.js**: Backend framework for server-side logic.
- **Express**: Fast, minimal web framework for Node.js.
- **Socket.IO**: Enables real-time, bidirectional communication between web clients and the server.
- **Vanilla JavaScript**: Used for frontend logic.
- **HTML5/CSS3**: Basic structure and styling for the chat interface.

