import 'reflect-metadata';
import './infra/database/typeorm';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';

import notFound from './errors/notFound';
import errorHandler from './errors/handlers';
// const logger = require('./errors/logger')('app');
import logger from './errors/logger';
const myLogger = logger('app');

const app = express();
app.use(cors({ origin: '*' }))
app.use(express.json());

const initErrorHandlers = (app: any) => {
  app.use(notFound);

  app.use((err: any, req: any, res: any, next: any) => {
    errorHandler.handle(err, res);
  });

  process.on('unhandledRejection', (reason, promise) => {
    myLogger.info('Unhandled rejection. Throwing...');

    throw reason;
  });

  process.on('uncaughtException', (err) => {
    myLogger.info('Uncaught exception. Handling...');

    errorHandler.handle(err);
  });
}



app.use(routes);
initErrorHandlers(app);

export { app };
