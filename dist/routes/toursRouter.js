"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursRouter = void 0;
const express_1 = __importDefault(require("express"));
const tours_1 = require("../controllers/tours");
exports.toursRouter = express_1.default.Router();
exports.toursRouter
    .route('/')
    .get(tours_1.controller.getAllTours)
    .post(tours_1.controller.createNewTour);
exports.toursRouter
    .route('/:id')
    .get(tours_1.controller.getTour)
    .put(tours_1.controller.updateTour)
    .patch(tours_1.controller.patchTour)
    .delete(tours_1.controller.deleteTour);
