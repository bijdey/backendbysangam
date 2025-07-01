const express = require('express');
const app = express();
const connectDB = require('./config/db'); 

// ✅ Connect to MongoDB
connectDB();

// ✅ Required to handle form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ EJS setup or static HTML setup
app.set('view engine', 'ejs');
app.set('views', './views');

// ✅ Routes
app.use('/', require('./routes/mainRoutes'));

// ✅ Start Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
