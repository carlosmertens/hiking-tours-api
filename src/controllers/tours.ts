import {Request, Response} from 'express';

function getAllTours(req: Request, res: Response) {
  res.send({message: 'GET all tours'});
}

function createNewTour(req: Request, res: Response) {
  res.send({message: 'POST a new tour'});
}

function getTour(req: Request, res: Response) {
  res.send({message: 'GET a tour by id'});
}

function updateTour(req: Request, res: Response) {
  res.send({message: 'PUT request to update a tour'});
}

function patchTour(req: Request, res: Response) {
  res.send({message: 'PATCH request to modify a property of a tour'});
}

function deleteTour(req: Request, res: Response) {
  res.send({message: 'DELETE a tour'});
}

export const controller = {
  getAllTours,
  createNewTour,
  getTour,
  updateTour,
  patchTour,
  deleteTour,
};
