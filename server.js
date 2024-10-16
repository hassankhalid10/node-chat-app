// Importing required modules
const express = require('express');  // Importing Express to create a web server
const app = express();               // Initializing an Express application
const http = require('http').createServer(app);  // Creating an HTTP server using the Express app

// Setting up the port
const PORT = process.env.PORT || 3000;  // Setting the port to a value from the environment variable or defaulting to 3000

// Starting the server and listening on the specified port
http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);  // Output a message to confirm the server is running
});

// Serving static files from the 'public' directory
app.use(express.static(__dirname + '/public'));  // Setting the 'public' directory to serve static assets (like CSS, JS, images)

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');  // Sending the 'index.html' file when the root URL is accessed
});

// Setting up Socket.IO for real-time communication
const io = require('socket.io')(http);  // Integrating Socket.IO with the HTTP server for WebSocket connections

// Handling WebSocket connections
io.on('connection', (socket) => {
    console.log('Connected...');  // Log message when a client connects via WebSocket

    // Listening for 'message' event from the connected client
    socket.on('message', (msg) => {
        // Broadcasting the received message to all other clients except the sender
        socket.broadcast.emit('message', msg);  
    });
});
