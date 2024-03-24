import {Router} from 'express';
import {controllers} from '../controllers/tours';
import {validateParam} from '../middlewares/validateParam';

export const toursRouter = Router();

toursRouter.param('id', validateParam);

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
