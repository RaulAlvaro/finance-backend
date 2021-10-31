const express = require('express');
const connectDb = require('./connection');
const morgan = require('morgan');
const routes = require('./routes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(morgan('common'));
app.use(express.json());
app.use(cors());
app.use('/v1', routes);

app.listen(process.env.PORT, async () => {
  console.log('Servidor Encendido, en el puerto:', process.env.PORT);
  await connectDb();
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});
