import {Request, Response} from 'express';
import {TourModel, validate} from '../models/Tour';
import {ITour} from '../interfaces';

async function getAllTours(req: Request, res: Response) {
  const tours = await TourModel.find();

  res.status(200).send({
    status: 'success',
    result: tours.length,
    data: tours,
    message: 'All tours were requested',
  });
}

async function createNewTour(req: Request<{}, {}, ITour>, res: Response) {
  // Validate body
  const {error} = validate(req.body);
  if (error)
    return res.status(400).send({status: 'fail', message: error.message});

  // Create tour
  const tour = await TourModel.create(req.body);

  // Response status and new tour created
  res.status(201).send({
    status: 'success',
    data: tour,
    message: 'New tour has been created',
  });
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
