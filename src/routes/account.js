const express = require('express');
const Account = require('../controllers/account');
// const userValidation = require('../middlewares/userValidation');

const accountController = new Account();
const router = express.Router();

router.get('/', accountController.findAll);

router.get('/:id', accountController.findOne);

router.post('/', accountController.create);

router.put('/:id', accountController.update);

router.delete('/:id', accountController.remove);

// router.delete('/:id', userValidation(), accountController.remove);

module.exports = router;
