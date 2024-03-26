import {Express} from 'express-serve-static-core';
import {toursRouter} from '../routes/toursRouter';
import {usersRouter} from '../routes/usersRouter';
import {errorHandler} from '../middlewares/errorHandler';

export function startRoutes(app: Express) {
  app.use('/api/v1/tours', toursRouter);
  app.use('/api/v1/users', usersRouter);

  app.use(errorHandler);
}
