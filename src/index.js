import express from 'express';
import connectDb from './connection';
import morgan from 'morgan';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(morgan('common'));
app.use(express.json());

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
