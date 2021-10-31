const User = require('../services/user');
const userService = new User();

class UserController {
  async create(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const userCreated = await userService.createUser(name, email, password);
      res.status(201).json({ data: userCreated });
    } catch (error) {
      next(error);
    }
  }

  async authenticate(req, res, next) {
    try {
      const { email, password } = req.body;
      const correctAuth = await userService.authenticateUser(email, password);
      if (!correctAuth) {
        res.status(400).json({ data: 'Invalid Params' });
      }
      res.status(201).json({ data: correctAuth });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
