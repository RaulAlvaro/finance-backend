import accountHistoryService from '../services/accountHistory';

export default {
  async findAll(req, res, next) {
    try {
      const accountsHistory = await accountHistoryService.findAccountsHistory();
      res.status(200).json({ data: accountsHistory });
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const accountHistory = await accountHistoryService.findAccountHistory(id);
      res.status(200).json({ data: accountHistory });
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { account, initAmount, endAmount, cutOff } = req.body;
      const accountHistoryCreated =
        await accountHistoryService.createAccountHistory(
          account,
          initAmount,
          endAmount,
          cutOff
        );
      res.status(201).json({ data: accountHistoryCreated });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const accountHistoryCreated =
        await accountHistoryService.updateAccountHistory(id, req.body);
      res.status(201).json({ data: accountHistoryCreated });
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    const { id } = req.params;
    try {
      const accountHistoryDeleted =
        await accountHistoryService.deleteAccountHistory(id);
      res.status(200).json({ data: accountHistoryDeleted });
    } catch (error) {
      next(error);
    }
  },
};
