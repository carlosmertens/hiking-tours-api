"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursRouter = void 0;
const express_1 = require("express");
const tours_1 = require("../controllers/tours");
const validateParam_1 = require("../middlewares/validateParam");
exports.toursRouter = (0, express_1.Router)();
exports.toursRouter.param('id', validateParam_1.validateParam);
exports.toursRouter
    .route('/')
    .get(tours_1.controllers.getAllTours)
    .post(tours_1.controllers.createNewTour);
exports.toursRouter
    .route('/:id')
    .get(tours_1.controllers.getTour)
    .put(tours_1.controllers.updateTour)
    .patch(tours_1.controllers.patchTour)
    .delete(tours_1.controllers.deleteTour);
