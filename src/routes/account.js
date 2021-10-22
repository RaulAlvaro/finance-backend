import express from 'express';
import accountController from '../controllers/account';
import userValidation from '../middlewares/userValidation';

const router = express.Router();

router.get('/', accountController.findAll);

router.get('/:id', accountController.findOne);

router.post('/', accountController.create);

router.put('/:id', accountController.update);

router.delete('/:id', userValidation.validate, accountController.remove);

module.exports = router;
