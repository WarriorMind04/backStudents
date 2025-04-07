const DBService = require('./dbService');

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

  getStudentStatus(calificacion, deuda){
    const aprobado = calificacion >= 70;
    const tieneDeuda = deuda === 'Sí';

    if (aprobado && !tieneDeuda) return 'aprobado';
    if (!aprobado && !tieneDeuda) return 'pendiente';
    if (aprobado && tieneDeuda) return 'reestructura';
    if (!aprobado && tieneDeuda) return 'expulsado';
  }

  async getAllStudents() {
    return Array.from(this.students.values()).map(student => ({
      matricula: student.matricula,
      nombre: student.nombre,
      estatus: this.getStudentStatus(student.calificacion, student.deuda)
    }));
  }

  async getStudentById(matricula) {
    const student = this.students.get(matricula);
    if (!student) return null;
    return {
      matricula: student.matricula,
      nombre: student.nombre,
      estatus: this.getStudentStatus(student.calificacion, student.deuda)
    };
  }

  async createStudent(nombre, calificacion, deuda) {
    const matricula = Date.now().toString();
    const student = { matricula, nombre, calificacion, deuda };
    this.students.set(matricula, student);
    return {
      matricula,
      nombre,
      estatus: this.getStudentStatus(calificacion, deuda)
    };
  }

  async updateStudent(matricula, nombre, calificacion, deuda) {
    const student = this.students.get(matricula);
    if (!student) return null;
    const updatedStudent = { matricula, nombre, calificacion, deuda };
    this.students.set(matricula, updatedStudent);
    return {
      matricula,
      nombre,
      estatus: this.getStudentStatus(calificacion, deuda)
    };
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