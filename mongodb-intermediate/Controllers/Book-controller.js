
const Author= require('../models/Author')
const Book= require('../models/Book')

const createAuthor= async(req,res)=>{
    try {
        const author= new Author(req.body)
        await author.save()
        res.status(201).json({
            success: true,
            date: author
        })
        
    } catch (error) {
        console.error('error found at the createAuthor', error)
        res.status(500).json({
            success: false,
            message: 'Some error occured at the createAuthor controller'
        })
    }
}



const createBook= async(req,res)=>{

    try {
        const book= new Book(req.body)
        await book.save()
        
        res.status(201).json({
            success: true,
            data: book
        })
    } catch (error) {
        console.error('error at createBook', error)
        res.status(500).json({
            success: false,
            message: 'some error occured at the createBook controller'
        })
        
    }
}



const getBookWithAuthor= async(req,res)=>{
    try {
        const book= await Book.findById(req.params.id).populate('author')
        if(!book){
            return res.status(404).json({
                success: false,
                message: 'No book found by this author'
            })
        }
        res.status(201).json({
            success: true,
            data: book
        })

    } catch (error) {
        console.error('error found at the getBookWithAuthor', error)
        res.status(500).json({
            success: false,
            message: 'error at the getBookWithAuthorController'
        })
        
    }
}



 

module.exports= {createAuthor, createBook, getBookWithAuthor}

// 68847c80dd356781a9fb4bef
