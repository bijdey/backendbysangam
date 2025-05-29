const express = require('express');
const app = express();
const port = 3000;

const requestTimeStampLogger = (req, res, next) => {
    const timestamp = new Date().toISOString()
    console.log(`${timestamp} from ${req.method} method to the url ${req.url}`);
    next();
};
app.use(requestTimeStampLogger);

app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
