const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Home page (form)
router.get('/', (req, res) => {
  res.render('home');
});

// Handle form POST via controller
router.post('/submit-marks', studentController.submitMarks);

module.exports = router;
