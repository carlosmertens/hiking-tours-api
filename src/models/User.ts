import mongoose from 'mongoose';
import Joi from 'joi';
import {IUser} from '../interfaces';

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50,
    default: 'John Doe',
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 8,
    maxlength: 1024,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 1024,
  },
});

const UserModel = mongoose.model('users', userSchema);

function validate(user: IUser) {
  const schema = Joi.object({
    name: Joi.string().required().trim().min(1).max(50).default('John Doe'),
    email: Joi.string().required().trim().email().min(8).max(50),
    password: Joi.string().required().trim().min(8).max(25),
  });

  return schema.validate(user);
}

export {UserModel, validate};
