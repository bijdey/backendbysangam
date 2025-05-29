const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory for the views
app.set('views', path.join(__dirname, 'views'));

const products = [
    {
        id: 1,
        title: 'Product 1'
    }, {
        id: 2,
        title: 'Product 2'
    }, {
        id: 3,
        title: 'Product 3'
    }
];

app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Home', 
        products: products  
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});