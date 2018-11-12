const express = require('express');
const authRoute = require('../apps/Auth/authRoute');
const userRoute = require('../apps/User/userRoute');


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome To React Api View' });
});

router.use('/auth', authRoute);
router.use('/user', userRoute);

module.exports = router;
