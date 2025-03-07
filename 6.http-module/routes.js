const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the home page!');
    } else if (url === '/pro') {  // Fixed: changed 'else(url === ...)' to 'else if'
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the pro page!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port\n http://localhost:${port}`);
});
