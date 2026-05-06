const { ObjectId } = require('mongodb');
const { getDB } = require('../db_connection');

// Add Student
async function addStudent(req, res) {
    const db = getDB();
    const result = await db.collection("students").insertOne(req.body);
    res.json(result);
}

// add many
async function add_Many_Student(req, res) {
    const db = getDB();
    const result = await db.collection("students").insertMany(req.body);
    res.json(result);
}

// Get All Students
async function getStudents(req, res) {
    const db = getDB();
    const students = await db.collection("students").find().toArray();
    res.json(students);
}

// Get One Student
async function find_one_Student(req, res) {
    const db = getDB();
    const id = req.params.id;

    const student = await db.collection("students").findOne({
        _id: new ObjectId(id)
    });

    res.json(student);
}

// Update Student
async function updateStudent(req, res) {
    const db = getDB();
    const id = req.params.id;

    const result = await db.collection("students").updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
    );

    res.json(result);
}
// update many student

async function update_many_Student(req, res) {
    const db = getDB();

    const { filter, update } = req.body;

    const result = await db.collection("students").updateMany(
        filter,
        { $set: update }
    );

    res.json(result);
}

// Delete Student
async function deleteStudent(req, res) {
    const db = getDB();
    const id = req.params.id;

    const result = await db.collection("students").deleteOne({
        _id: new ObjectId(id)
    });

    res.json(result);
}
async function delete_many_Student(req, res) {
    const db = getDB();

    const filter = req.body.filter;

    const result = await db.collection("students").deleteMany(filter);

    res.json(result);
}

module.exports = {
    addStudent,
    add_Many_Student,
    getStudents,
    find_one_Student,
    updateStudent,
    update_many_Student,
    delete_many_Student,
    deleteStudent
};