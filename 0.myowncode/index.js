var http = require('http');

//create a server object:
const server= http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8081); //the server object listens on port 8080

console.log('Server started on http://localhost:8081');