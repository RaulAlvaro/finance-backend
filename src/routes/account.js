import express from 'express';
import accountController from '../controllers/account';
import userValidation from '../middlewares/userValidation';

const router = express.Router();

router.get('/', accountController.findAll);

router.get('/:id', accountController.findOne);

router.post('/', userValidation.validate, accountController.create);

router.put('/:id', userValidation.validate, accountController.update);

router.delete('/:id', userValidation.validate, accountController.remove);

module.exports = router;
