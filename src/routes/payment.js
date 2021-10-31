const express = require('express');
const Payment = require('../controllers/payment');

const paymentController = new Payment();
const router = express.Router();

router.get('/', paymentController.findAll);

router.get('/:id', paymentController.findOne);

router.post('/', paymentController.create);

router.put('/:id', paymentController.update);

router.delete('/:id', paymentController.remove);

module.exports = router;
