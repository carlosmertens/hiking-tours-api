import mongoose from 'mongoose';
import Joi from 'joi';
import {ITour} from '../interfaces';

const tourSchema = new mongoose.Schema<ITour>({
  name: {type: String, trim: true, minlength: 1, maxlength: 50, required: true},
  price: {type: Number, min: 100, max: 9999, required: true},
  priceDiscount: {type: Number, dafault: 0},
  duration: {type: Number, required: true},
  maxGroupSize: {type: Number, min: 2, max: 50, required: true},
  difficulty: {
    type: String,
    enum: {
      values: ['easy', 'medium', 'hard'],
      message: 'Difficulty is either: easy, medium or hard',
    },
    required: true,
  },
  ratings: {
    average: {type: Number, min: 0, max: 10, default: 0},
    count: {type: Number, min: 0, max: 10, default: 0},
  },
  summary: {
    type: String,
    trim: true,
    minlength: 10,
    maxlength: 250,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000,
    default: 'Contact us for more information!',
  },
  imageCover: {type: String, minlength: 5, maxlength: 500, required: true},
  images: [{type: String, minlength: 5, maxlength: 500}],
  startDates: [Date],
  createdAt: {type: Date, default: Date.now},
});

const TourModel = mongoose.model('tours', tourSchema);

function validate(tour: ITour) {
  const schema = Joi.object({
    name: Joi.string().trim().min(1).max(50).required(),
    price: Joi.number().min(100).max(9999).required(),
    priceDiscount: Joi.number().default(0),
    duration: Joi.number().required(),
    maxGroupSize: Joi.number().min(2).max(50).required(),
    difficulty: Joi.string().valid('easy', 'medium', 'hard').required(),
    summary: Joi.string().min(10).max(250).required(),
    description: Joi.string().max(1000).default('Coming soon!'),
    imageCover: Joi.string().min(5).max(500).required(),
    images: Joi.array().items(Joi.string().min(5).max(500)),
    startDates: Joi.array().items(Joi.date()),
  });

  return schema.validate(tour);
}

export {TourModel, validate};
