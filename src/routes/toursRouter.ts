import {Router} from 'express';
import {controllers} from '../controllers/tours';

export const toursRouter = Router();

toursRouter
  .route('/')
  .get(controllers.getAllTours)
  .post(controllers.createNewTour);

toursRouter
  .route('/:id')
  .get(controllers.getTour)
  .put(controllers.updateTour)
  .patch(controllers.patchTour)
  .delete(controllers.deleteTour);
