import express from 'express';
import categoryController from '../controllers/category';

const router = express.Router();

router.get('/', categoryController.findAll);

router.get('/:id', categoryController.findOne);

router.post('/', categoryController.create);

router.put('/:id', categoryController.update);

router.delete('/:id', categoryController.remove);

module.exports = router;
