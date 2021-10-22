import paymentService from '../services/payment';

export default {
  async findAll(req, res, next) {
    try {
      const payments = await paymentService.findPayments();
      res.status(200).json({ data: payments });
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const payment = await paymentService.findPayment(id);
      res.status(200).json({ data: payment });
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { description, amount, date, account, category } = req.body;
      const paymentCreated = await paymentService.createPayment(
        description,
        amount,
        date,
        account,
        category
      );
      res.status(201).json({ data: paymentCreated });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const paymentUpdated = await paymentService.updatePayment(id, req.body);
      res.status(201).json({ data: paymentUpdated });
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    const { id } = req.params;
    try {
      const paymentDeleted = await paymentService.deletePayment(id);
      res.status(200).json({ data: paymentDeleted });
    } catch (error) {
      next(error);
    }
  },
};
