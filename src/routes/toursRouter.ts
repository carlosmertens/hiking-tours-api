import express from 'express';
import {controller} from '../controllers/tours';

export const toursRouter = express.Router();

toursRouter
  .route('/')
  .get(controller.getAllTours)
  .post(controller.createNewTour);

toursRouter
  .route('/:id')
  .get(controller.getTour)
  .put(controller.updateTour)
  .patch(controller.patchTour)
  .delete(controller.deleteTour);
