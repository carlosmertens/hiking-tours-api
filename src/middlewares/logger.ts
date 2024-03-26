import {RequestHandler} from 'express-serve-static-core';
import {log} from '../logs';

export const logger: RequestHandler = (req, res, next) => {
  log.http(req.method + ' ' + req.url);
  next();
};
