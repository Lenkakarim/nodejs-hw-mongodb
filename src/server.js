import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pinoHttp from 'pino-http';
import mongoose from 'mongoose';

import contactsRouter from './routers/contactsRouter.js';

dotenv.config({ path: './env' });

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(pinoHttp());

  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Підключення до бази даних MongoDB успішно виконано');
    })
    .catch((err) => {
      console.error('Помилка при підключенні до бази даних', err);
    });

  app.use('/contacts', contactsRouter);

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the contacts API' });
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT);
};
