import express from 'express';
import paymentController from '../controllers/payment';

const router = express.Router();

router.get('/', paymentController.findAll);

router.get('/:id', paymentController.findOne);

router.post('/', paymentController.create);

router.put('/:id', paymentController.update);

router.delete('/:id', paymentController.remove);

module.exports = router;
