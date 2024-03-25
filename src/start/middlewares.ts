import express, {Express} from 'express';
import {logger} from '../middlewares/logger';

export function startMiddlewares(app: Express) {
  const path = process.env.PWD;
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(logger);
  app.use(express.static(`${path}/public`));
}
