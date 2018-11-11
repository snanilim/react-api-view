const express = require('express');
const authController = require('./authController');

const router = express.Router();

router.route('/login')
  .post(authController.logIn);


module.exports = router;
