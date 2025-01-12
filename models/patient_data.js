const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  guardianName: {
    type: String,
    required: true,
    trim: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  healthRecords: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HealthRecord'
  }]
});

module.exports = mongoose.model('Child', childSchema);
