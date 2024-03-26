import express from 'express';
import {Express} from 'express-serve-static-core';
import {logger} from '../middlewares/logger';

export function startMiddlewares(app: Express) {
  const path = process.env.PWD;
  app.use(express.static(`${path}/public`));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(logger);
}
