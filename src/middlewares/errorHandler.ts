import {ErrorRequestHandler} from 'express-serve-static-core';
import {log} from '../logs';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  log.error(err.message);
  if (err.name === 'CastError') {
    return res.status(400).send({
      status: 'error',
      message: `Invalid ${err.path}: ${err.value}`,
    });
  } else {
    res.status(500).send({
      status: 'error',
      message: 'Error Handler: Something went wrong',
    });
  }
};
