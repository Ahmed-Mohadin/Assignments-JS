const router = require('express').Router();
const userModel = require('../models/users/userModel');

router.post('/signup', userModel.signUpUser);
router.post('/signin', userModel.signInUser);

module.exports = router;