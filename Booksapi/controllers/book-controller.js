//importing model
const Book= require('../models/book')

const getAllBooks= async(req,res)=>{

}


const getSingleBookById = async (req, res) => {
  try {
    const newBookFormData = req.body; 
    const newlyCreatedBook = await Book.create(newBookFormData); 
    
    res.status(201).json({
      success: true,
      message: 'Book added',
      data: newlyCreatedBook 
    });
  } catch (e) {
    console.error('Error in getSingleBookById:', e);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

const addNewBook= async(req,res)=>{

}


const updateBook= async(req,res)=>{

}


const deleteBook= async(req,res)=>{

}

module.exports={getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}

