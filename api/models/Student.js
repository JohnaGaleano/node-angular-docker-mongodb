const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Student = new Schema(
  {
    student_name: {
      type: String
    },
    courses: {
      type: JSON
    }
    ,
    id_student: {
      type: Number
    },
    student: {
      type: Boolean
    },
    enrollment:{
      type: Number
    }
  },
  {
    collection: "students"
  }
);
module.exports = mongoose.model("Student", Student);
