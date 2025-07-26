const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = 3000;

// Create the HTTP server
const server = http.createServer(app);

// Attach socket.io to the HTTP server
const io = socketIo(server);

// Serve static files from the "public" folder
app.use(express.static('public'));

// Track connected users
const users = new Set();

io.on("connection", (socket) => {
  console.log('A user is now connected');

  // Handle when a user joins the chat
  socket.on('join', (userName) => {
    users.add(userName);

    // Notify everyone a user joined
    io.emit('userJoined', userName);

    // Send updated user list to all clients
    io.emit('userList', Array.from(users));
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


