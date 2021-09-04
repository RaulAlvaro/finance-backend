import accountService from '../services/account';

export default {
  async findAll(req, res, next) {
    try {
      const accounts = await accountService.findAccounts();
      res.status(200).json({ data: accounts });
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const account = await accountService.findAccount(id);
      res.status(200).json({ data: account });
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { name, amount, typeAccount } = req.body;
      const accountCreated = await accountService.createAccount(
        name,
        amount,
        typeAccount
      );
      res.status(201).json({ data: accountCreated });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const accountUpdated = await accountService.updateAccount(id, req.body);
      res.status(201).json({ data: accountUpdated });
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    const { id } = req.params;
    try {
      const accountDeleted = await accountService.deleteAccount(id);
      res.status(200).json({ data: accountDeleted });
    } catch (error) {
      next(error);
    }
  },
};
