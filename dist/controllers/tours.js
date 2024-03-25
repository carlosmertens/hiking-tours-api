"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const Tour_1 = require("../models/Tour");
function getAllTours(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tours = yield Tour_1.TourModel.find();
        res.status(200).send({
            status: 'success',
            result: tours.length,
            data: tours,
            message: 'All tours were requested',
        });
    });
}
function createNewTour(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate body
        const { error } = (0, Tour_1.validate)(req.body);
        if (error)
            return res.status(400).send({ status: 'fail', message: error.message });
        // Create tour
        const tour = yield Tour_1.TourModel.create(req.body);
        // Response status and new tour created
        res.status(201).send({
            status: 'success',
            data: tour,
            message: 'New tour has been created',
        });
    });
}
function getTour(req, res) {
    res.send({ status: 'success', data: {} });
}
function updateTour(req, res) {
    res.status(200).send({
        status: 'success',
        data: '<tour updated>',
        message: 'PUT request to update a tour',
    });
}
function patchTour(req, res) {
    res.status(200).send({
        status: 'success',
        data: '<tour patch>',
        message: 'PATCH request to modify a property of a tour',
    });
}
function deleteTour(req, res) {
    res
        .status(204)
        .send({ status: 'success', data: null, message: 'DELETE a tour' });
}
exports.controllers = {
    getAllTours,
    createNewTour,
    getTour,
    updateTour,
    patchTour,
    deleteTour,
};
