
const express= require('express')
const router= express.Router()
const {createAuthor, createBook, getBookWithAuthor}= require('../Controllers/Book-controller')

router.post('/author', createAuthor)
router.post('/book', createBook)
router.get('/book/:id', getBookWithAuthor) //here the id will be bookid

module.exports= router

