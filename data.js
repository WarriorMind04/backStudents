const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.students = new Map();
    // Initialize with 5 dummy students
    const dummyStudents = [
      { matricula: '1', nombre: 'John Doe', calificacion: 100, deuda: 'Sí' },
      { matricula: '2', nombre: 'Jane Smith', calificacion: 85, deuda: 'No' },
      { matricula: '3', nombre: 'Bob Johnson', calificacion: 68, deuda: 'No' },
      { matricula: '4', nombre: 'Alice Brown', calificacion: 50, deuda: 'Sí' },
      { matricula: '5', nombre: 'Charlie Wilson', calificacion: 93, deuda: 'No' },
    ];

    dummyStudents.forEach((student) => {
      this.students.set(student.matricula, student);
    });
  }

  async getAllStudents() {
    return Array.from(this.students.values());
  }

  async getStudentById(matricula) {
    return this.students.get(matricula);
  }

  async createStudent(nombre, calificacion, deuda) {
    const matricula = Date.now().toString();
    const student = { matricula, nombre, calificacion, deuda };
    this.students.set(matricula, student);
    return student;
  }

  async updateStudent(matricula, nombre, calificacion, deuda) {
    const student = this.students.get(matricula);
    if (!student) {
      return null; // O podrías lanzar un error si prefieres
    }
    const updatedStudent = { matricula, nombre, calificacion, deuda };
    this.students.set(matricula, updatedStudent);
    return updatedStudent;
  }

  async deleteStudent(matricula) {
    const student = this.students.get(matricula);
    if (student) {
      this.students.delete(matricula);
      return true;
    }
    return false;
  }
}

module.exports = FakeService;