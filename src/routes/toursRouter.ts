import {Router} from 'express';
import {asyncWrapper} from '../middlewares/asyncWrapper';
import {controllers} from '../controllers/tours';
// import {validateParam} from '../middlewares/validateParam';

export const toursRouter = Router();

// TODO: Delete validateParam middleware function
// toursRouter.param('id', validateParam);

toursRouter
  .route('/')
  .get(asyncWrapper(controllers.getAllTours))
  .post(asyncWrapper(controllers.createNewTour));

toursRouter
  .route('/:id')
  .get(asyncWrapper(controllers.getTour))
  .put(asyncWrapper(controllers.updateTour))
  .patch(asyncWrapper(controllers.patchTour))
  .delete(asyncWrapper(controllers.deleteTour));
