const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://creativenetworkbijay:creativenetworkbijayp@cluster0.1wqsalg.mongodb.net/studentReportDB?retryWrites=true&w=majority';

module.exports = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
