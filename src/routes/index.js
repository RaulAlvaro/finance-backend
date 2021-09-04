import express from 'express';
import typeAccount from './typeAccount';
import account from './account';
import user from './user';

const router = express.Router();

router.use('/typeAccount', typeAccount);
router.use('/account', account);
router.use('/user', user);

module.exports = router;
