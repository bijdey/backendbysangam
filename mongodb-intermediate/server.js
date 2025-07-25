require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
//get the routes
const productRoutes= require('./routes/product-routes')
//Get the port from .env or default to 3000
const PORT = process.env.PORT || 5000;




//Connect the database
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB database is connected');
  } catch (e) {
    console.error('Database connection failed:', e);
  }
}
connectDB();


//Use middleware
app.use(express.json());
app.use('/products', productRoutes)




//Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
