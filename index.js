const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Configuración de la aplicación Express
const app = express();
app.use(bodyParser.json());

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000', // El origen de tu aplicación frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Conexión a MongoDB
connectDB();

// Rutas
const personasRouter = require('./routes/personas');
app.use('/personas', personasRouter);

// Configuración del puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
