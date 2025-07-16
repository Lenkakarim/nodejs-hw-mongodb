import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import pinoHttp from 'pino-http';
import cookieParser from 'cookie-parser';

import contactsRouter from './routers/contactsRouter.js';
import authRouter from './routers/auth.js';
import authenticate from './middlewares/authenticate.js';

import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(pinoHttp());

app.use('/auth', authRouter);
app.use('/contacts', authenticate, contactsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the contacts API' });
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
