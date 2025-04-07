class DBService {
    constructor() {
      this.initialized = false;
    }
  
    async getAllStudents() {
      if (!this.initialized) {
        throw new Error('Service not initialized');
      }
      throw new Error('Method not implemented');
    }
  
    async getStudentById(_matricula) {
      if (!this.initialized) {
        throw new Error('Service not initialized');
      }
      throw new Error('Method not implemented');
    }
  
    async createStudent(_nombre, _calificacion, _deuda) {
      if (!this.initialized) {
        throw new Error('Service not initialized');
      }
      throw new Error('Method not implemented');
    }
  
    async updateStudent(_matricula, _nombre, _calificacion, _deuda) {
      if (!this.initialized) {
        throw new Error('Service not initialized');
      }
      throw new Error('Method not implemented');
    }
  
    async deleteStudent(_matricula) {
      if (!this.initialized) {
        throw new Error('Service not initialized');
      }
      throw new Error('Method not implemented');
    }
  }
  
  module.exports = DBService;