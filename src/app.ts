import 'reflect-metadata';
import './infra/database/typeorm';
import express from 'express';
import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(routes);

export { app };
