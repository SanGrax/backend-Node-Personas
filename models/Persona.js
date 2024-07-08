// models/Persona.js
const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Persona', personaSchema);
