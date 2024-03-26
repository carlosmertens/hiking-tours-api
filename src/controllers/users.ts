import {Request, Response} from 'express-serve-static-core';
import {UserModel, validate} from '../models/User';
import {IUser} from '../interfaces';
import {CastError, Error} from 'mongoose';

async function getAllUsers(req: Request, res: Response) {
  const users = await UserModel.find();

  res.status(200).send({
    status: 'success',
    result: users.length,
    data: users,
    message: 'All users were requested',
  });
}

function createNewUser(req: Request<{}, {}, IUser>, res: Response) {
  const {error} = validate(req.body);
  if (error)
    return res.status(400).send({status: 'fail', message: error.message});

  const user = UserModel.create(req.body);

  res.status(201).send({
    status: 'success',
    data: user,
    message: 'New user has been created',
  });
}

async function getUser(req: Request, res: Response) {
  try {
    const user = await UserModel.findById(req.params.id);

    res.status(200).send({
      status: 'success',
      data: user,
      message: 'GET request for one user with id',
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

async function updateUser(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: {},
    message: 'PUT request to update user by id',
  });
}

async function patchUser(req: Request, res: Response) {
  res.status(200).send({
    status: 'success',
    data: {},
    message: "PATCH request to update user's properties",
  });
}

async function deleteUser(req: Request, res: Response) {
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
