// controllers/personas.js
const Persona = require('../models/Persona');

// Controlador para crear una nueva persona
const crearPersona = async (req, res) => {
    try {
        const persona = await Persona.create(req.body);
        res.status(201).json(persona);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para obtener todas las personas
const obtenerPersonas = async (req, res) => {
    try {
        const personas = await Persona.find();
        res.status(200).json(personas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controlador para obtener una persona por ID
const obtenerPersonaPorId = async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        if (!persona) {
            return res.status(404).json({ error: 'Persona no encontrada' });
        }
        res.status(200).json(persona);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controlador para actualizar una persona por ID
const actualizarPersona = async (req, res) => {
    try {
        const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!persona) {
            return res.status(404).json({ error: 'Persona no encontrada' });
        }
        res.status(200).json(persona);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Controlador para eliminar una persona por ID
const eliminarPersona = async (req, res) => {
    try {
        const persona = await Persona.findByIdAndDelete(req.params.id);
        if (!persona) {
            return res.status(404).json({ error: 'Persona no encontrada' });
        }
        res.status(200).json({ message: 'Persona eliminada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    crearPersona,
    obtenerPersonas,
    obtenerPersonaPorId,
    actualizarPersona,
    eliminarPersona
};
