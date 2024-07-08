// routes/personas.js
const express = require('express');
const router = express.Router();
const {
    crearPersona,
    obtenerPersonas,
    obtenerPersonaPorId,
    actualizarPersona,
    eliminarPersona
} = require('../controllers/personas');

// Rutas
router.post('/', crearPersona);
router.get('/', obtenerPersonas);
router.get('/:id', obtenerPersonaPorId);
router.put('/:id', actualizarPersona);
router.delete('/:id', eliminarPersona);

module.exports = router;
