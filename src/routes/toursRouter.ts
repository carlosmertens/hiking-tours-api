import {Router} from 'express';
import {asyncRequest} from '../middlewares/asyncRequest';
import {controllers} from '../controllers/tours';
// import {validateParam} from '../middlewares/validateParam';

export const toursRouter = Router();

// TODO: Delete validateParam middleware function
// toursRouter.param('id', validateParam);

toursRouter
  .route('/')
  .get(asyncRequest(controllers.getAllTours))
  .post(asyncRequest(controllers.createNewTour));

toursRouter
  .route('/:id')
  .get(asyncRequest(controllers.getTour))
  .put(asyncRequest(controllers.updateTour))
  .patch(asyncRequest(controllers.patchTour))
  .delete(asyncRequest(controllers.deleteTour));
