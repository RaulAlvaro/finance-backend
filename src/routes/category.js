const express = require('express');
const Category = require('../controllers/category');

const categoryController = new Category();
const router = express.Router();

router.get('/', categoryController.findAll);

router.get('/:id', categoryController.findOne);

router.post('/', categoryController.create);

router.put('/:id', categoryController.update);

router.delete('/:id', categoryController.remove);

module.exports = router;
