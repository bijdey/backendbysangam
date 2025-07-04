require('dotenv').config()

const express= require('express')
const dataBase= require('./database/db')
const bookRoutes= require('./routes/book-routes')


const app=express()
const port= process.env.port || 5000

//connect to our database
dataBase()

//middleware- the below middleware will only parse the json
app.use(express.json())


//routes
app.use('/api/books', bookRoutes) // this is the parent route
//it will work like this example-  '/api/books/delete'





//listening in the port
app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});


//411