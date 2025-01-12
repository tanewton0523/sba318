const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointments');

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create a new appointment
router.post('/', async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update an appointment by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAppointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json(updatedAppointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove an appointment by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!deletedAppointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
