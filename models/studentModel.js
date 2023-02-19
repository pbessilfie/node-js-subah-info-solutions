const mongoose = require("mongoose");

const studentSchema = mongoose.model("students", {
  studentID: Number,
  studentName: String,
  residence_Hall: String,
  level: String,
  programme: String,
});

module.exports = studentSchema;
