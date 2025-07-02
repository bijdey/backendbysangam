const mongoose = require("mongoose");
const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://creativenetworkbijay:creativenetworkbijayp@cluster0.1wqsalg.mongodb.net/booksDB");
      console.log('databse connection made successfuly')
  } catch (error) {
    console.log("mongo db connection failed", error);
    process.exit(1);
  }
};

module.exports= connectToDb
