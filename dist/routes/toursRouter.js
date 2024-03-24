"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursRouter = void 0;
const express_1 = require("express");
const tours_1 = require("../controllers/tours");
const validateParam_1 = require("../middlewares/validateParam");
exports.toursRouter = (0, express_1.Router)();
exports.toursRouter.param('id', validateParam_1.validateParam);
// TODO: Refactor with joi validation
const validateBodyReq = (req, res, next) => {
    if (!req.body.name)
        return res
            .status(400)
            .send({ status: 'fail', data: {}, message: 'Name is required' });
    next();
};
exports.toursRouter
    .route('/')
    .get(tours_1.controllers.getAllTours)
    .post(validateBodyReq, tours_1.controllers.createNewTour);
exports.toursRouter
    .route('/:id')
    .get(tours_1.controllers.getTour)
    .put(tours_1.controllers.updateTour)
    .patch(tours_1.controllers.patchTour)
    .delete(tours_1.controllers.deleteTour);
