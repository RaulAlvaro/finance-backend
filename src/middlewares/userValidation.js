import jwt from 'jsonwebtoken';

export default {
  validate(req, res, next) {
    try {
      const verified = jwt.verify(
        req.headers['x-access-token'],
        process.env.SECRET_KEY
      );
      console.log('verified', verified);
      next();
    } catch (error) {
      res.json({ status: 'error', message: error.message, data: null });
    }
  },
};
