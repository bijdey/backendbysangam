const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

let books = [{
        id: '1',
        title: 'Book 1'
    },
    {
        id: '2',
        title: 'Book 2'
    },
    {
        id: '3',
        title: 'Book 3'
    },
    {
        id: '4',
        title: 'Book 4'
    }
];

// Intro route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the home page of the book store API"
    });
});

// Get all books route
app.get('/getbooks', (req, res) => {
    res.json(books);
});


// Get single book route (FIXED)
app.get('/getbooks/:id', (req, res) => {
    const book = books.find(item => item.id === req.params.id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({
            message: 'Book not found. Please try with a different book ID',
            availableIDs: books.map(availableidsare => availableidsare.id)
        });
    }
});


//add a new book
app.post('/add', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `Book ${books.length +1}`
    }
    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: 'new book added'
    })

})


//update a book
app.put('/update/:id', (req, res) => {
    const findCurrentBook = books.find(bookItem => bookItem.id === req.params.id);

    // Validate that req.body and req.body.title exist
    if (!req.body || typeof req.body.title !== 'string' || req.body.title.trim() === '') {
        return res.status(400).json({
            message: 'Invalid or missing "title" in request body. Please send JSON like: { "title": "New Book Title" }'
        });
    }

    if (findCurrentBook) {
        findCurrentBook.title = req.body.title;

        res.status(200).json({
            message: `Book with ID ${req.params.id} successfully updated.`,
            updatedBook: findCurrentBook
        });

    } else {
        res.status(404).json({
            message: 'Book not found. Make sure the ID is correct.'
        });
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
console.log();