import express from 'express';
import typeAccountController from '../controllers/typeAccount.js';
import userValidation from '../middlewares/userValidation';

const router = express.Router();

router.get('/', typeAccountController.findAll);

router.get('/:id', typeAccountController.findOne);

router.post('/', userValidation.validate, typeAccountController.create);

router.put('/:id', userValidation.validate, typeAccountController.update);

router.delete('/:id', userValidation.validate, typeAccountController.remove);

module.exports = router;
