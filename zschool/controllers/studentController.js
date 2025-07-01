const Student = require('../models/Student');

// POST: Submit student marks
async function submitMarks(req, res) {
  try {
    const data = req.body;
    const marks = data.marks;

    const newStudent = new Student({
      studentName: data.studentName,
       classTeacher: data.classTeacher,
      rollNumber: data.rollNumber,
     
      marks: {
        mathematics: parseInt(marks.mathematics),
        english: parseInt(marks.english),
        hindi: parseInt(marks.hindi),
        sanskrit: parseInt(marks.sanskrit)
      }
    });

    await newStudent.save();


    
    res.redirect('/');
  } catch (error) {
    console.error("❌ Error saving student marks:", error);
    req.flash('error_msg', '❌ Failed to save student data.');
    res.redirect('/');
  }
}

module.exports = {
  submitMarks
};
