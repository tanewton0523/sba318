const express = require('express');
const router = express.Router();
const Child = require('../models/patient_data');

// GET all children
router.get('/', async (req, res) => {
  try {
    const children = await Child.find().populate('healthRecords');
    res.status(200).json(children);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single child by ID
router.get('/:id', async (req, res) => {
  try {
    const child = await Child.findById(req.params.id).populate('healthRecords');
    if (!child) return res.status(404).json({ message: 'Child not found' });
    res.status(200).json(child);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create a new child
router.post('/', async (req, res) => {
  try {
    const newChild = await Child.create(req.body);
    res.status(201).json(newChild);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update a child by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedChild = await Child.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedChild) return res.status(404).json({ message: 'Child not found' });
    res.status(200).json(updatedChild);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove a child by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedChild = await Child.findByIdAndDelete(req.params.id);
    if (!deletedChild) return res.status(404).json({ message: 'Child not found' });
    res.status(200).json({ message: 'Child deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
