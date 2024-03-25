import 'dotenv/config';
import express from 'express';
import {log} from './logs';
import {startDB} from './start/db';
import {startMiddlewares} from './start/middlewares';
import {startRoutes} from './start/routes';

// console.log(`${__dirname}/../../public`);
// console.log(process.env);
// console.log(process.env.PWD);

// import {TourModel, validate} from './models/Tour';

// console.log(TourModel.find());

// const x = {
//   name: 'The test of the year',
//   price: 500,
//   rating: 70,
// };

// const validX = validate(x);

// console.log(validX.error);

// const testTour = new TourModel(x);

// testTour
//   .save()
//   .then(x => console.log(x))
//   .catch(err => console.log(err.message));

const app = express();

startDB();

startMiddlewares(app);

startRoutes(app);

const port = process.env.PORT || 8081;
app.listen(port, () => log.server(`Ready on port ${port}`));
