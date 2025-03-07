const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request received:", req.method, req.url); // Log request method & URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from server');
});

server.listen(port, () => {
    console.log(`Server is running on port\n http://localhost:${port}`);
});
