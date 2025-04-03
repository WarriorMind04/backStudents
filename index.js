const express = require('express');
const studentRoutes = require('./routes/student'); // Ajusta la ruta según tu estructura

const app = express();
app.use(express.json()); // Para parsear cuerpos JSON en POST y PUT
app.use('/students', studentRoutes); // Monta las rutas en /students

app.listen(3000, () => {
  console.log('Server running on port 3000');
});