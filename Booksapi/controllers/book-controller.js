//importing model
const Book= require('../models/book')

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    
    if (allBooks?.length > 0) {
      res.status(200).json({ 
        success: true,
        message: 'List of all the books fetched successfully',
        data: allBooks
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No books found in the database'
      });
    }
    
  } catch (e) {
    console.error('Error at getAllBooks:', e);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: e.message
    });
  }
};


const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId= req.params.id;
    const bookDetailsById= await Book.findById(getCurrentBookId)
    if(!bookDetailsById){
      return res.status(404).json({
        success: false,
        message: 'Book with the given id is not found'
      })
    } res.status(200).json({
      success: true,
      data: bookDetailsById
    })

  } catch (e) {
    console.error('Error in getSingleBookById:', e);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.error('error at addNewBook', e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};


const updateBook= async(req,res)=>{

}


const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: 'Book not found with this ID. Unable to delete.'
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Book with the specified ID has been deleted.',
        data: deletedBook
      });
    }

  } catch (e) {
    console.error('Error found at deleteBook:', e);
    res.status(500).json({
      success: false,
      message: 'Unable to delete the book. Something went wrong.',
      error: e.message
    });
  }
};


module.exports={getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}

 