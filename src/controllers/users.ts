import {Request, Response} from 'express-serve-static-core';
import {UserModel, validate} from '../models/User';
import {IUser} from '../interfaces';

/**
 * Returns a list of all users in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function getAllUsers(req: Request, res: Response) {
  const users = await UserModel.find();

  res.status(200).send({
    status: 'success',
    result: users.length,
    data: users,
    message: 'All users were requested',
  });
}

/**
 * Creates a new user in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function createNewUser(req: Request<{}, {}, IUser>, res: Response) {
  const {error} = validate(req.body);
  if (error)
    return res.status(400).send({status: 'fail', message: error.message});

  const user = await UserModel.create(req.body);

  res.status(201).send({
    status: 'success',
    data: user,
    message: 'New user has been created',
  });
}

/**
 * Returns a single user by their ID.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
async function getUser(req: Request, res: Response) {
  const user = await UserModel.findById(req.params.id);

  res.status(200).send({
    status: 'success',
    data: user,
    message: 'A user has been requested',
  });
}

async function updateUser(req: Request, res: Response) {
  const {error} = validate(req.body);
  if (error)
    return res.status(400).send({status: 'fail', message: error.message});

  const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send({
    status: 'success',
    data: user,
    message: 'User has been updated',
  });
}

async function patchUser(req: Request, res: Response) {
  const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send({
    status: 'success',
    data: user,
    message: 'User property has been modified',
  });
}

async function deleteUser(req: Request, res: Response) {
  const user = await UserModel.findByIdAndDelete(req.params.id);

  res.status(200).send({
    status: 'success',
    data: user,
    message: 'A user has been deleted',
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
