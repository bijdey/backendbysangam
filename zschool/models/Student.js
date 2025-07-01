const mongoose = require('mongoose');

function formatISTTimestamp() {
  const istDate = new Date(); // Local system time (already IST if you're in India)

  const day = String(istDate.getDate()).padStart(2, '0');
  const month = String(istDate.getMonth() + 1).padStart(2, '0');
  const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const monthName = monthNames[istDate.getMonth()];
  const year = istDate.getFullYear();

  const hours = String(istDate.getHours()).padStart(2, '0');
  const minutes = String(istDate.getMinutes()).padStart(2, '0');
  const seconds = String(istDate.getSeconds()).padStart(2, '0');
  const milliseconds = String(istDate.getMilliseconds()).padStart(3, '0');

  return `${day}-${month}(${monthName})-${year} Time: ${hours}:${minutes}:${seconds}.${milliseconds}+05:30`;
}

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  classTeacher: { type: String, required: true },
  rollNumber: { type: String, required: true },
  marks: {
    mathematics: { type: Number, required: true },
    english: { type: Number, required: true },
    hindi: { type: Number, required: true },
    sanskrit: { type: Number, required: true }
  },
  createdAt: { type: String, default: formatISTTimestamp }
});

module.exports = mongoose.model('Student', studentSchema);
