const express = require('express');
const typeAccount = require('../controllers/typeAccount.js');

const typeAccountController = new typeAccount();
const router = express.Router();

router.get('/', typeAccountController.findAll);

router.get('/:id', typeAccountController.findOne);

router.post('/', typeAccountController.create);

router.put('/:id', typeAccountController.update);

router.delete('/:id', typeAccountController.remove);

module.exports = router;
