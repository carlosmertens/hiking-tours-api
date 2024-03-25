import {Request, Response} from 'express';
import {TourModel} from '../models/Tour';

async function getAllTours(req: Request, res: Response) {
  /**
   * Function controller to get all users
   */
  const tours = await TourModel.find();

  res.status(200).send({
    status: 'success',
    result: tours.length,
    data: tours,
    message: 'All tours were requested',
  });
}

function createNewTour(req: Request, res: Response) {
  res.status(201).send({status: 'success', data: {}});
}

function getTour(req: Request, res: Response) {
  res.send({status: 'success', data: {}});
}

function updateTour(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: '<tour updated>',
    message: 'PUT request to update a tour',
  });
}

function patchTour(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: '<tour patch>',
    message: 'PATCH request to modify a property of a tour',
  });
}

function deleteTour(req: Request, res: Response) {
  res
    .status(204)
    .send({status: 'success', data: null, message: 'DELETE a tour'});
}

export const controllers = {
  getAllTours,
  createNewTour,
  getTour,
  updateTour,
  patchTour,
  deleteTour,
};
