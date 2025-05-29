const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

let books = [
    { id: '1', title: 'Book 1' },
    { id: '2', title: 'Book 2' },
    { id: '3', title: 'Book 3' },
    { id: '4', title: 'Book 4' }
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
app.post('/add',(req,res)=>{
    const newBook={
        id: books.length +1,
        title: `Book ${books.length +1}`
    }
    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: 'new book added '

    })
})


//update a book
app.put('/update/:id',(req,res)=>{
    const findCurrentBook= books.find(bookItem=>bookItem.id === req.params.id)
    if(findCurrentBook){
        find
    }
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));