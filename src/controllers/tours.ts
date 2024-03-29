import {Request, Response} from 'express-serve-static-core';
import {TourModel, validate} from '../models/Tour';
import {ITour} from '../interfaces';

/**
 * Returns a list of all tours in the database.
 *
 * @param req The request object.
 * @param res The response object.
 */
async function getAllTours(req: Request, res: Response) {
  const tours = await TourModel.find();

  res.status(200).send({
    status: 'success',
    result: tours.length,
    data: tours,
    message: 'All tours were requested',
  });
}

/**
 * Creates a new tour in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function createNewTour(req: Request<{}, {}, ITour>, res: Response) {
  const {error} = validate(req.body);
  if (error)
    return res.status(400).send({status: 'fail', message: error.message});

  const tour = await TourModel.create(req.body);

  res.status(201).send({
    status: 'success',
    data: tour,
    message: 'New tour has been created',
  });
}

/**
 * Returns a tour document when a valid tour ID is provided.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function getTour(req: Request, res: Response) {
  const tour = await TourModel.findById(req.params.id);

  if (!tour)
    return res.status(404).send({status: 'fail', message: 'Tour not found'});

  res.status(200).send({
    status: 'success',
    data: tour,
    message: 'GET request for one tour with id',
  });
}

/**
 * Updates a tour in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function updateTour(req: Request, res: Response) {
  const {error} = validate(req.body);
  if (error)
    return res.status(400).send({status: 'fail', message: error.message});

  const tour = await TourModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!tour)
    return res.status(404).send({status: 'fail', message: 'Tour not found'});

  res.status(200).send({
    status: 'success',
    data: tour,
    message: 'PUT request to update a tour',
  });
}

/**
 * Updates a tour in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function patchTour(req: Request, res: Response) {
  const {error} = validate(req.body);
  if (error) {
    return res.status(400).send({status: 'fail', message: error.message});
  }

  const tour = await TourModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!tour)
    return res.status(404).send({status: 'fail', message: 'Tour not found'});

  res.status(200).send({
    status: 'success',
    data: tour,
    message: 'PATCH request to modify a property of a tour',
  });
}

/**
 * Deletes a tour from the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function deleteTour(req: Request, res: Response) {
  const tour = await TourModel.findByIdAndDelete(req.params.id);

  if (!tour)
    return res.status(404).send({status: 'fail', message: 'Tour not found'});

  res.status(200).send({
    status: 'success',
    data: tour,
    message: `Tour ${req.params.id} has been deleted`,
  });
}

export const controllers = {
  getAllTours,
  createNewTour,
  getTour,
  updateTour,
  patchTour,
  deleteTour,
};
