import express from 'express';
import typeAccount from './typeAccount';
import account from './account';

const router = express.Router();

router.use('/typeAccount', typeAccount);
router.use('/account', account);

module.exports = router;
