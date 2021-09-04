import typeAccountService from '../services/typeAccount';

export default {
  async findAll(req, res, next) {
    try {
      const typeAccounts = await typeAccountService.findTypeAccounts();
      res.status(200).json({ data: typeAccounts });
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const typeAccount = await typeAccountService.findTypeAccount(id);
      res.status(200).json({ data: typeAccount });
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { name, color } = req.body;
      const typeAccountCreated = await typeAccountService.createTypeAccount(
        name,
        color
      );
      res.status(201).json({ data: typeAccountCreated });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const typeAccountUpdated = await typeAccountService.updateTypeAccount(
        id,
        req.body
      );
      res.status(201).json({ data: typeAccountUpdated });
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    const { id } = req.params;
    try {
      const typeAccountDeleted = await typeAccountService.deleteTypeAccount(id);
      res.status(200).json({ data: typeAccountDeleted });
    } catch (error) {
      next(error);
    }
  },
};
