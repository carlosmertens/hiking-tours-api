import {Express} from 'express-serve-static-core';
import {toursRouter} from '../routes/toursRouter';

export function startRoutes(app: Express) {
  app.use('/api/tours', toursRouter);
}
