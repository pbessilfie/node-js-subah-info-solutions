const express = require("express");
const mongoose = require("mongoose");
const studentSchema = require("./models/studentModel");
const dataBase_URL ="mongodb+srv://essilfieprinceb2301:<password>@cluster0.17quzuj.mongodb.net/?retryWrites=true&w=majority";
const server = express();
const PORT = process.env.PORT || 2000;

// GETTING ALL STUDENT
server.get("/students", (req, res) => {
  const all_Students = studentSchema.find();
  res.send(all_Students);
  try {
    console.log("Student details has been released");
  } catch (error) {
    res.send(error);
  }
});

// GETTING STUDENT BY ID
server.get("/students/:id", (req, res) => {
  const student = studentSchema.findOne({ id: req.params.studentID });
  res.send(student);
  try {
    console.log("Specific Student");
  } catch (error) {
    res.send(error);
  }
});

// POSTING STUDENT
server.post("/add_Student", async (req, res) => {
  const student = new studentSchema(req.body);
  try {
    await student.save();
    console.log("Student info updated succesfully!")
    res.send(student);
  } catch (error) {
    res.send(error);
  }
});

// connecting sever to DataBase
server.listen(PORT, () => {
  console.log(`server has started running on Port ${PORT}`);
  mongoose.set('strictQuery', false);
  mongoose.connect(dataBase_URL, () => {
    console.log("DataBase is connected");
  });
});
