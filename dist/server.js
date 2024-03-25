"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const logs_1 = require("./logs");
const db_1 = require("./start/db");
const middlewares_1 = require("./start/middlewares");
const routes_1 = require("./start/routes");
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
const app = (0, express_1.default)();
(0, db_1.startDB)();
(0, middlewares_1.startMiddlewares)(app);
(0, routes_1.startRoutes)(app);
const port = process.env.PORT || 8081;
app.listen(port, () => logs_1.log.server(`Ready on port ${port}`));
