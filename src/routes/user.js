import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.post('/create', userController.create);

router.post('/authenticate', userController.authenticate);

module.exports = router;
