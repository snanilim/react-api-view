const express = require('express');
const generatorController = require('./generatorController');

const router = express.Router();

router
  .route('/')
  .get(generatorController.generators)
  .post(generatorController.createGenerator);

router
  .route('/:generatorID')
  .get(generatorController.getOneGenerator)
  .put(generatorController.updateGenerator);


module.exports = router;
