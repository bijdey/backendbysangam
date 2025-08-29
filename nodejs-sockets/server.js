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

  // Handle when a user joins the chat (there is also a code in the frotend, with the event 'join')
  socket.on('join', (userName) => {
    users.add(userName);    //added the new user in the users list
    socket.userName= userName;

    // Notify everyone a user joined when new user joins, done from the server side (broadcasting that new user has joined)
    io.emit('userJoined', userName);

    // Send updated user list to all clients (users)
    io.emit('userList', Array.from(users));
  });

  //handle the incoming chat message
  socket.on('chatMessage', (message)=>{
    //broadcast the received message to all the connected clients

    io.emit('chatMessage', message)
  })

  //handle the user disconnection
  socket.on('disconnect', () => {
  console.log('a user is disconnected');  
  users.forEach((user) => {
    if (user === socket.userName) {       
      users.delete(user);
      io.emit('userLeft', user);     
      
      //updated user list broadcast
      io.emit('userList', Array.from(users))
    }
  });
});


});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


