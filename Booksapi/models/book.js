
const mongoose= require('mongoose')

const bookSchema= new mongoose.Schema({
    title: {type: String, required: [true, 'Book titile is required'],
        trim:true,
        maxLenght: [100, 'Book title cannot be more then 100 characters/'] 
    }
})