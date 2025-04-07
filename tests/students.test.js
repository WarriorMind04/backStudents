const request = require('supertest');
const app = require('../index'); // Ajusta la ruta a tu archivo principal

describe('Students API', () => {
  it('GET /students devuelve una lista', async () => {
    const res = await request(app).get('/students');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /students crea un estudiante', async () => {
    const res = await request(app)
      .post('/students')
      .send({ nombre: 'Test', calificacion: 80, deuda: 'No' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('matricula');
    expect(res.body.estatus).toBe('aprobado');
  });
});