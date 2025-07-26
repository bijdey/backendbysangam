
const mongoose= require('mongoose')

const AuthourSchema= new mongoose.Schema({
    name: String,
    bio: String
})

module.exports= mongoose.model('Author', AuthourSchema)