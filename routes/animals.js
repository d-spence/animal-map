const express = require('express');
const router = express.Router();
const {
  getAnimals,
  addAnimal,
} = require('../controllers/animalsController');

router.route('/')
  .get(getAnimals)
  .post(addAnimal);

module.exports = router;