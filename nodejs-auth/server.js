 
require('dotenv').config();
const express= require('express')
const app= express()
//import of the routes
const authRoutes= require('./routes/auth-routes') 
const homeRoutes= require('./routes/home-routes')
const adminRoutes= require('./routes/admin-routes')  
const uploadImageRoutes= require('./routes/image-routes')
const port= process.env.port || 5000

//database connection
const ConnectToDatabase = require('./database/db');
ConnectToDatabase();


//Middlewares
app.use(express.json())
  
app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/image', uploadImageRoutes)





app.listen(port, () => {
  console.log(`Server running on port   http://localhost:${port}`);
});