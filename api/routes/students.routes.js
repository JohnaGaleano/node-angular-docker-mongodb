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
studentRoutes.route("/course/:course").get(function(req, res) {
  let course = req.params.course;
  let query = `{"courses.${course}": { "$gt": 0 }}`;
  query = JSON.parse(query);
  console.log(query);
  Student.find(
    query,'-__v -_id -courses.physics',
    function(err, student) {
      if (err) res.json(err);
      else res.json(student);
    }
  );
});

module.exports = studentRoutes;
