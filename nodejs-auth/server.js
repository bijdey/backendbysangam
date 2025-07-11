 
require('dotenv').config();
const express= require('express')
const app= express()
const authRoutes= require('./routes/auth-routes')   //import of the routes
const port= process.env.port || 5000

//database connection
const ConnectToDatabase = require('./database/db');
ConnectToDatabase();
  
app.use('api/auth', authRoutes)



app.listen(port, () => {
  console.log(`Server running on port   http://localhost:${port}`);
});