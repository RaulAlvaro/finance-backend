const Category = require('../services/category');
const categoryService = new Category();

class CategoryController {
  async findAll(req, res, next) {
    try {
      const categories = await categoryService.findCategories();
      res.status(200).json({ data: categories });
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const category = await categoryService.findCategory(id);
      res.status(200).json({ data: category });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { name, color } = req.body;
      const categoryCreated = await categoryService.createCategory(name, color);
      res.status(201).json({ data: categoryCreated });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const categoryUpdated = await categoryService.updateCategory(
        id,
        req.body
      );
      res.status(201).json({ data: categoryUpdated });
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    const { id } = req.params;
    try {
      const categoryDeleted = await categoryService.deleteCategory(id);
      res.status(200).json({ data: categoryDeleted });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
