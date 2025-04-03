class StudentController {
    constructor(service) {
      this.service = service;
    }
  
    async getAll() {
      return this.service.getAllStudents();
    }
  
    async getById(matricula) {
      const student = await this.service.getStudentById(matricula);
      if (!student) throw new Error('Student not found');
      return student;
    }
  
    async create(nombre, calificacion, deuda) {
      return this.service.createStudent(nombre, calificacion, deuda);
    }
  
    async update(matricula, nombre, calificacion, deuda) {
      return this.service.updateStudent(matricula, nombre, calificacion, deuda);
    }
  
    async delete(matricula) {
      await this.service.deleteStudent(matricula);
      return { message: 'Student deleted' };
    }
  }
  
  module.exports = StudentController;
  