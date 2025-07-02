require('dotenv').config()

const express= require('express')
const dataBase= require('./database/db')


const app=express()
const port= process.env.port || 5000

//connect to our database
dataBase()

//middleware- the below middleware will only parse the json
app.use(express.json())





//listening in the port
app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});
