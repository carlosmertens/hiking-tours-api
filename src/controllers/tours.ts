import {Request, Response} from 'express';
import * as fs from 'fs';

// TODO: Move interface to own folder
interface ITours {
  id: number;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: string[];
}

// TODO: Once app is connected to MongoDB, delete file system data
const path = '/Users/mertens/Developer/hiking-tours-api';
const tours: ITours[] = JSON.parse(
  fs.readFileSync(`${path}/tours-simple.json`, 'utf8')
);

function getAllTours(req: Request, res: Response) {
  res
    .status(200)
    .send({status: 'success', results: tours.length, data: {tours}});
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
  const tour = tours.find(el => el.id === Number(req.params.id));
  if (!tour)
    return res
      .status(404)
      .send({status: 'fail', message: 'Tour with given id was not found'});

  res.send({status: 'success', data: tour});
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

export const controller = {
  getAllTours,
  createNewTour,
  getTour,
  updateTour,
  patchTour,
  deleteTour,
};
