const express = require('express');

const user = require('./user');
const typeAccount = require('./typeAccount');
const account = require('./account');
const category = require('./category');
const accountHistory = require('./accountHistory');
const payment = require('./payment');

const router = express.Router();

router.use('/user', user);
router.use('/typeAccount', typeAccount);
router.use('/account', account);
router.use('/category', category);
router.use('/accountHistory', accountHistory);
router.use('/payment', payment);

module.exports = router;
