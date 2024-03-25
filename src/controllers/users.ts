import {Request, Response} from 'express';
import {UserModel, validate} from '../models/User';
import {IUser} from '../interfaces';

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

function createNewUser(req: Request<{}, {}, IUser>, res: Response) {
  // Validate body
  const {error} = validate(req.body);
  if (error)
    return res.status(400).send({status: 'fail', message: error.message});

  // Create user
  const user = UserModel.create(req.body);

  // Respnse status and new user created
  res.status(201).send({
    status: 'success',
    data: user,
    message: 'New user has been created',
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
