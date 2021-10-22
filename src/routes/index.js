import express from 'express';

import user from './user';
import typeAccount from './typeAccount';
import account from './account';
import category from './category';
import accountHistory from './accountHistory';
import payment from './payment';

const router = express.Router();

router.use('/user', user);

router.use('/typeAccount', typeAccount);
router.use('/account', account);
router.use('/category', category);
router.use('/accountHistory', accountHistory);
router.use('/payment', payment);

module.exports = router;
