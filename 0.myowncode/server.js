const http = require('http');
let port =5000

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('This is my Home Page');
    } else if(req.url === '/about'){
        res.end('This is my About Page');
    } else if(req.url === '/contact'){
        res.end('This is my Contact Page');
    } else {
        res.end('404, Resource Not Found');
    }
})

server.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
})