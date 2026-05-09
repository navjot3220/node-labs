const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Navjot", age: 21 },
  { id: 2, name: "Vishu", age: 20 }
];


// Show all students
app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id)
  const data=  students.find(s=> s.id===id)
    res.json(data)
});


// Add student
app.post("/students", (req, res) => {
  students.push({
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age
  });

  res.send("Student added");
});


// Update student
app.put("/students/:id", (req, res) => {
  let student = students.find(s => s.id == req.params.id);

  if (student) {
    student.name = req.body.name;
    student.age = req.body.age;
    res.send("Student updated");
  } else {
    res.send("Student not found");
  }
});

// Delete student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.send("Student deleted");
});


app.listen(3000, () => {
  console.log("Running on port 3000");
});