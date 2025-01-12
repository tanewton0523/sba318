const express = require('express');
const router = express.Router();
const HealthRecord = require('../models/health_record');

// GET all health records
router.get('/', async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create a new health record
router.post('/', async (req, res) => {
  try {
    const newRecord = await HealthRecord.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update a health record by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecord) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(updatedRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove a health record by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecord = await HealthRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
