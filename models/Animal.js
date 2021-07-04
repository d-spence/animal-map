const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a name before submitting'],
    minLength: [2, 'Must be at least 2 characters in length'],
    maxLength: [100, 'Must be 100 characters or less'],
    lowercase: true,
  },
  sciName: {
    type: String,
    trim: true,
    required: [true, 'Please add a scientific name before submitting'],
    minLength: [2, 'Must be at least 2 characters in length'],
    maxLength: [100, 'Must be 100 characters or less'],
    lowercase: true,
  },
  countries: {
    type: Array,
  },
  states: {
    type: Array,
  },
  type: {
    type: String,
    trim: true,
    required: [true, 'Please specify animal class before submitting'],
    minLength: [2, 'Must be at least 2 characters in length'],
    maxLength: [100, 'Must be 50 characters or less'],
    lowercase: true,
  },
  desc: {
    type: String,
    required: [true, 'Please add a description before submitting'],
    minLength: [20, 'Must be at least 2 characters in length'],
    maxLength: [2000, 'Must be 2000 characters or less'],
  },
  weight: {
    type: Number,
    min: [0, 'Please use a positive weight value'],
    max: [99999, 'Value must be less than 100000 kgs']
  },
  lifespan: {
    type: Number,
    min: [0, 'Please use a positive lifespan value'],
    max: [99999, 'Value must be less than 100000 years'],
  },
  imageUrl: {
    type: String,
  },
  citeUrl: {
    type: String,
  }
});

module.exports = mongoose.model('Animal', AnimalSchema);