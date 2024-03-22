import express, {Express} from 'express';
import {logger} from '../middlewares/logger';

export function startMiddlewares(app: Express) {
  app.use(express.json());
  app.use(logger);
}
