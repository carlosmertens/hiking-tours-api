"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursRouter = void 0;
const express_1 = require("express");
const asyncWrapper_1 = require("../middlewares/asyncWrapper");
const tours_1 = require("../controllers/tours");
// import {validateParam} from '../middlewares/validateParam';
exports.toursRouter = (0, express_1.Router)();
// TODO: Delete validateParam middleware function
// toursRouter.param('id', validateParam);
exports.toursRouter
    .route('/')
    .get((0, asyncWrapper_1.asyncWrapper)(tours_1.controllers.getAllTours))
    .post((0, asyncWrapper_1.asyncWrapper)(tours_1.controllers.createNewTour));
exports.toursRouter
    .route('/:id')
    .get((0, asyncWrapper_1.asyncWrapper)(tours_1.controllers.getTour))
    .put((0, asyncWrapper_1.asyncWrapper)(tours_1.controllers.updateTour))
    .patch((0, asyncWrapper_1.asyncWrapper)(tours_1.controllers.patchTour))
    .delete((0, asyncWrapper_1.asyncWrapper)(tours_1.controllers.deleteTour));
