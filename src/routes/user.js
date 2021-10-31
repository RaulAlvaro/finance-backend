const express = require('express');
const User = require('../controllers/user');
const userController = new User();

const router = express.Router();

router.post('/create', userController.create);

router.post('/authenticate', userController.authenticate);

module.exports = router;
