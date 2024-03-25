import {Request, Response} from 'express';
import {UserModel} from '../models/User';

async function getAllUsers(req: Request, res: Response) {
  /**
   * Function controller to get all users
   */
  const users = await UserModel.find();

  res.status(200).send({
    status: 'success',
    result: users.length,
    data: users,
    message: 'All users were requested',
  });
}

function createNewUser(req: Request, res: Response) {
  res.status(201).send({
    status: 'success',
    data: {},
    message: 'POST request to create a new user',
  });
}

function getUser(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: {},
    message: 'GET request for one user with id',
  });
}

function updateUser(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: {},
    message: 'PUT request to update user by id',
  });
}

function patchUser(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: {},
    message: "PATCH request to update user's properties",
  });
}

function deleteUser(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: {},
    message: 'DELETE request to remove user by id',
  });
}

export const controllers = {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  patchUser,
  deleteUser,
};
