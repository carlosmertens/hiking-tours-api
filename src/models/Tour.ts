import mongoose from 'mongoose';
import Joi from 'joi';
import {ITour} from '../interfaces';

const tourSchema = new mongoose.Schema<ITour>({
  name: {type: String, required: true, trim: true, minlength: 1, maxlength: 50},
  price: {type: Number, required: true, min: 100, max: 9999},
  rating: {type: Number, min: 1, max: 10, default: 1},
});

const TourModel = mongoose.model('tours', tourSchema);

function validate(tour: ITour) {
  const schema = Joi.object({
    name: Joi.string().required().trim().min(1).max(50),
    price: Joi.number().required().min(100).max(9999),
    rating: Joi.number().default(1).min(1).max(10),
  });

  return schema.validate(tour);
}

export {TourModel, validate};
