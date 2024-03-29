// import 'dotenv/config';
import fs from 'fs';
import {log} from '../logs';
import {startDB} from '../start/db';
import {TourModel} from '../models/Tour';

// console.log(`${__dirname}/../../public`);
// console.log(process.env);
// console.log(process.env.PWD);

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

// START MONGODB CONNECTION
startDB();

// READ JSON FILE
// console.log(process.env.PWD);
const tours = JSON.parse(
  fs.readFileSync(`${process.env.PWD}/tours-simple.json`, 'utf-8')
);

// console.log(tours);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await TourModel.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await TourModel.deleteMany();
    log.db('Data successfully deleted!');
  } catch (err) {
    log.error(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv[2]);
