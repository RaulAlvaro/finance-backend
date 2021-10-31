const express = require('express');
const AccountHistory = require('../controllers/accountHistory');

const accountHistoryController = new AccountHistory();
const router = express.Router();

router.get('/', accountHistoryController.findAll);

router.get('/:id', accountHistoryController.findOne);

router.post('/', accountHistoryController.create);

router.put('/:id', accountHistoryController.update);

router.delete('/:id', accountHistoryController.remove);

module.exports = router;
