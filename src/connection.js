const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

const connectDb = () => {
  mongoose
    .connect(url, options)
    .then(function () {
      console.log('MongoDB is connected');
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = connectDb;
