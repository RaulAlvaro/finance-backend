const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
  async createUser(name, email, password) {
    try {
      const user = await User.create({ name, email, password });
      return user;
    } catch (error) {
      throw new Error('createUser in User service failed - ' + error);
    }
  }

  async authenticateUser(email, password) {
    try {
      const user = await User.findOne({ email: email });
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
          expiresIn: '1h',
        });
        return { user, token };
      }
      return false;
    } catch (error) {
      throw new Error('authenticateUser in User service failed - ' + error);
    }
  }
}

module.exports = UserService;
