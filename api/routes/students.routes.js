const express = require("express");
const app = express();

const studentRoutes = express.Router();
// Require Student model in our routes module
let Student = require("../models/Student");
// Defined store route
studentRoutes.route("/add").post(function(req, res) {
  let student = new Student(req.body);
  console.log(student);

  student
    .save()
    .then(student => {
      res.status(200).json({ student: "student in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route
studentRoutes.route("/").get(function(req, res) {
  Student.find(function(err, students) {
    if (err) {
      console.log(err);
    } else {
      res.json(students);
    }
  });
});
// Defined edit route
studentRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Student.findById(id, function(err, student) {
    res.json(student);
  });
});
// Defined update route
studentRoutes.route("/update/:id").post(function(req, res) {
  Student.findById(req.params.id, function(err, next, student) {
    if (!student) return next(new Error("Could not load Document"));
    else {
      student.student_name = req.body.student_name;
      student.courses = req.body.courses;
      student.id_student = req.body.id_student;
      student.email_student = req.body.email_student;
      student
        .save()
        .then(student => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
studentRoutes.route("/delete/:id").get(function(req, res) {
  Student.findByIdAndRemove({ _id: req.params.id }, function(err, student) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

// Defined delete | remove | destroy route
studentRoutes.route("/score/:course").get(function(req, res) {
  let course = req.params.course;
  let query = `{"courses.${course}": { "$gt": 0 }}`;
  let projection = `"courses.${course}"`
  
  query = JSON.parse(query);
  projection = JSON.parse(projection);

  let result = Student.find(query, projection, function(
    err,
    student
  ) {
    if (err) res.json(err);
    else {
      console.log(course);
      let score = 0;
      for (let i = 0; i < student.length; i++) {
        
        score += student[i].courses[course];
        // console.log(student[i].courses[course]);
        
      }
      var mean = score/student.length;
      console.log(mean);
      res.json(mean);
    }
  });
});

// Defined update route to update all Documents
studentRoutes.route("/enrollment/:quantity").post(function(req, res) {
  let quantity = Number(req.params.quantity);
  // let queryE = `{"courses.${course}": { "$gt": 0 }}`;
  // let example = { active: true }, { $inc: { semester: 1 } }
  let query = `{ "student": true } `
  let query2 = `{ $inc: { "enrollment": ${quantity} } }`
  query = JSON.parse(query);
  query2 = JSON.parse(query2);

  console.log(query);
  
  Student.updateMany( query, query2 )
    .then(() => {
      res.json("Update completed");
    })
    .catch(err => {
      res.status(400).send("unable to update the database");
    });
});

module.exports = studentRoutes;
