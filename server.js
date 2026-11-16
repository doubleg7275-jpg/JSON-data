const express = require("express");
const app = express();
const PORT = 3000;

// middleware to recieve JSON data

app.use(express.json());

// hardcoded student data
let students = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    course: "Backend Development",
  },

  {
    id: 2,
    name: "Mary",
    email: "mary@gmail.com",
    course: "Frontend Development",
  },

  {
    id: 3,
    name: "Peter",
    email: "peter@gmail.com",
    course: "Mobile Development",
  },
];

students.push({
  id: 4,
  name: "Edidiong",
  email: "doubleg@gmail.com",
  course: "Digital Marketing",
});

// get all students
app.get("/api/students", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All student",
    data: students,
  });
});

// get only one student

app.post("/api/students/2", (req, res) => {
  res.status(200).json({
    success: true,
    message: "One student",
    data: students[2],
  });
});

// change course
app.put("/api/students/3", (req, res) => {
  students[2].course = "UI/UX Design";

  res.status(200).json({
    success: true,
    message: "updated",
    data: students[2],
  });
});

// start server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

// get a single student
// create a new student
// change no 3 course to UI/UX using put
