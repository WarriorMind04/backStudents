class StudentHttpHandler {
    constructor(studentController) {
      this.studentController = studentController;
    }
  
    async getAllStudents(req, res) {
      try {
        const students = await this.studentController.getAll();
        res.json(students);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async getStudentById(req, res) {
      try {
        const student = await this.studentController.getById(req.params.matricula);
        res.json(student);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    async createStudent(req, res) {
      try {
        const { nombre, calificacion, deuda } = req.body;
        const student = await this.studentController.create(nombre, calificacion, deuda);
        res.status(201).json(student);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async updateStudent(req, res) {
      try {
        const { matricula } = req.params;
        const { nombre, calificacion, deuda } = req.body;
        const student = await this.studentController.update(matricula, nombre, calificacion, deuda);
        res.json(student);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deleteStudent(req, res) {
      try {
        const { matricula } = req.params;
        await this.studentController.delete(matricula);
        res.json({ message: 'Student deleted successfully' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  // Export the class directly
  module.exports = StudentHttpHandler;