const express = require('express');
const router = express.Router();

const {
    addStudent,
    add_Many_Student,
    getStudents,
    find_one_Student,
    updateStudent,
    update_many_Student,
    delete_many_Student,
    deleteStudent
} = require('../controllers/studentController');
router.post('/', addStudent);
router.post('/many', add_Many_Student);

router.get('/', getStudents);
router.get('/:id', find_one_Student);

router.patch('/many', update_many_Student);
router.patch('/:id', updateStudent);

router.delete('/many',delete_many_Student);


// Delete student
router.delete('/:id', deleteStudent);

module.exports = router;