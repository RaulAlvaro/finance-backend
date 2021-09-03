import express from 'express';
import typeAccountController from '../controllers/typeAccount.js';

const router = express.Router();

router.get('/', typeAccountController.findAll);

router.get('/:id', typeAccountController.findOne);

router.post('/', typeAccountController.create);

router.put('/:id', typeAccountController.update);

router.delete('/:id', typeAccountController.remove);

module.exports = router;
