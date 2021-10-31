const TypeAccount = require('../services/typeAccount');
const typeAccountService = new TypeAccount();
class typeAccountController {
  async findAll(req, res, next) {
    try {
      const typeAccounts = await typeAccountService.findTypeAccounts();
      res.status(200).json(typeAccounts);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const typeAccount = await typeAccountService.findTypeAccount(id);
      res.status(200).json(typeAccount);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { name, color } = req.body;
      const typeAccountCreated = await typeAccountService.createTypeAccount(
        name,
        color
      );
      res.status(201).json(typeAccountCreated);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const typeAccountUpdated = await typeAccountService.updateTypeAccount(
        id,
        req.body
      );
      res.status(201).json(typeAccountUpdated);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    const { id } = req.params;
    try {
      const typeAccountDeleted = await typeAccountService.deleteTypeAccount(id);
      res.status(200).json(typeAccountDeleted);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = typeAccountController;
