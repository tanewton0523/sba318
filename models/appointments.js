const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  child: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Child',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  reason: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Canceled'],
    default: 'Scheduled'
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
