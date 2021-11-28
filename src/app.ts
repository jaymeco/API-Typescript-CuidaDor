import 'reflect-metadata';
import './infra/database/typeorm';
import express from 'express';
import { routes } from './routes';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const http = createServer(app);
const io = new Server(http,
  {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
      methods: ["GET", "POST"],
    }
  }
);

export { http, io };
