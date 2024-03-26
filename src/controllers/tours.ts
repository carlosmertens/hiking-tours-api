import {Request, Response} from 'express-serve-static-core';
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

async function getTour(req: Request, res: Response) {
  try {
    const tour = await TourModel.findById(req.params.id);

    res.status(200).send({
      status: 'success',
      data: tour,
      message: 'GET request for one tour with id',
    });
  } catch (error: any) {
    res
      .status(404)
      .send({
        status: 'fail',
        data: null,
        message: 'Something went wrong, please check the id',
        error: error.message,
      });
  }
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

/////////////////////////////
// TABNINE TEST
// TODO: Delete test function below

/**
 * Returns a 404 response when a tour is not found.
 * @param req The request object.
 * @param res The response object.
 */
export function tourNotFound(req: Request, res: Response) {
  res.status(404).send({status: 'fail', message: 'Tour not found'});
}

export const controllers = {
  getAllTours,
  createNewTour,
  getTour,
  updateTour,
  patchTour,
  deleteTour,
};
