import {Request, Response} from 'express';
import * as fs from 'fs';

const path = '/Users/mertens/Developer/hiking-tours-api';
const tours = JSON.parse(fs.readFileSync(`${path}/tours-simple.json`, 'utf8'));

function getAllTours(req: Request, res: Response) {
  res.send({status: 'success', results: tours.length, data: {tours}});
}

function createNewTour(req: Request, res: Response) {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({id: newId}, req.body);

  tours.push(newTour);
  fs.writeFile(`${path}/tours-simple.json`, JSON.stringify(tours), err =>
    console.log(err)
  );

  res.status(201).send({status: 'success', data: {tour: newTour}});
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
