const express = require('express');

const router = express.Router();
const StudentHttpHandler = require('../handlers/student'); // Ajusta la ruta según tu estructura
const StudentServiceFactory = require('../school');   // Ajusta la ruta según tu estructura
const StudentController = require('../controllers/student'); // Ajusta la ruta según tu estructura

// Create the service and controller
const studentService = StudentServiceFactory.create('fake');
const studentController = new StudentController(studentService);

// Create the handler instance
const studentHandler = new StudentHttpHandler(studentController);

// Set up routes with bound handler methods
router.get('/', studentHandler.getAllStudents.bind(studentHandler));
router.get('/:matricula', studentHandler.getStudentById.bind(studentHandler));
router.post('/', studentHandler.createStudent.bind(studentHandler));
router.put('/:matricula', studentHandler.updateStudent.bind(studentHandler));
router.delete('/:matricula', studentHandler.deleteStudent.bind(studentHandler));

module.exports = router;