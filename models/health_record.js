const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  child: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Child',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  height: {
    type: Number, // In centimeters
    required: true
  },
  weight: {
    type: Number, // In kilograms
    required: true
  },
  vaccinations: [{
    name: {
      type: String,
      required: true
    },
    dateAdministered: {
      type: Date,
      required: true
    }
  }],
  notes: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
