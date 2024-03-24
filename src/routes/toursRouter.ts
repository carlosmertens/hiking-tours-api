import {RequestHandler, Router} from 'express';
import {controllers} from '../controllers/tours';
import {validateParam} from '../middlewares/validateParam';

export const toursRouter = Router();

toursRouter.param('id', validateParam);

// TODO: Refactor with joi validation
const validateBodyReq: RequestHandler = (req, res, next) => {
  if (!req.body.name)
    return res
      .status(400)
      .send({status: 'fail', data: {}, message: 'Name is required'});

  next();
};

toursRouter
  .route('/')
  .get(controllers.getAllTours)
  .post(validateBodyReq, controllers.createNewTour);

toursRouter
  .route('/:id')
  .get(controllers.getTour)
  .put(controllers.updateTour)
  .patch(controllers.patchTour)
  .delete(controllers.deleteTour);
