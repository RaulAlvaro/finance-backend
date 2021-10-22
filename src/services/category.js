import Category from '../models/Category';

export default {
  async findCategories() {
    try {
      return await Category.find();
    } catch (error) {
      throw new Error('findCategories in Category service failed - ' + error);
    }
  },

  async findCategory(id) {
    try {
      return await Category.findOne({ _id: id });
    } catch (error) {
      throw new Error('findCategory in Category service failed - ' + error);
    }
  },

  async createCategory(name, color) {
    try {
      return await Category.create({ name, color });
    } catch (error) {
      throw new Error('createCategory in Category service failed - ' + error);
    }
  },

  async updateCategory(id, data) {
    try {
      const category = await Category.findOne({ _id: id }).exec();
      await Category.update({ _id: category._id }, { $set: { ...data } });
      return await Category.findOne({ _id: id });
    } catch (error) {
      throw new Error('updateCategory in Category service failed - ' + error);
    }
  },

  async deleteCategory(id) {
    try {
      const data = await Category.remove({ _id: id });
      if (data.ok) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error('deleteCategory in Category service failed - ' + error);
    }
  },
};
