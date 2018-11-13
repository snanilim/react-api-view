const express = require('express');
const userController = require('./userController');

const router = express.Router();

router.route('/')
  .get(userController.users)
  .post(userController.createUser);


module.exports = router;
