const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Student = new Schema(
  {
    student_name: {
      type: String
    },
    math: {
      type: Number
    },
    english: {
      type: Number
    },
    history: {
      type: Number
    },
    physics: {
      type: Number
    },
    id_student: {
      type: Number
    },
    email_student: {
      type: String
    }
  },
  {
    collection: "students"
  }
);
module.exports = mongoose.model("Student", Student);
