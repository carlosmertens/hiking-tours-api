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
/**
 * Returns a list of all tours in the database.
 *
 * @param req The request object.
 * @param res The response object.
 */
function getAllTours(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Simple filtering
        const queryObj = Object.assign({}, req.query);
        const excludedField = ['page', 'sort', 'limit', 'fields'];
        excludedField.forEach(field => delete queryObj[field]);
        // Advance filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        // Find filtered query
        let query = Tour_1.TourModel.find(JSON.parse(queryStr));
        // Sorting query
        if (req.query.sort) {
            const sort = req.query.sort;
            if (typeof sort === 'string')
                query = query.sort(sort.split(',').join(' '));
            else
                query = query.sort('-createdAt');
        }
        const tours = yield query;
        res.status(200).send({
            status: 'success',
            result: tours.length,
            data: tours,
            message: 'All tours were requested',
        });
    });
}
/**
 * Creates a new tour in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
function createNewTour(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { error } = (0, Tour_1.validate)(req.body);
        if (error)
            return res.status(400).send({ status: 'fail', message: error.message });
        const tour = yield Tour_1.TourModel.create(req.body);
        res.status(201).send({
            status: 'success',
            data: tour,
            message: 'New tour has been created',
        });
    });
}
/**
 * Returns a tour document when a valid tour ID is provided.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
function getTour(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tour = yield Tour_1.TourModel.findById(req.params.id);
        if (!tour)
            return res.status(404).send({ status: 'fail', message: 'Tour not found' });
        res.status(200).send({
            status: 'success',
            data: tour,
            message: 'GET request for one tour with id',
        });
    });
}
/**
 * Updates a tour in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
function updateTour(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { error } = (0, Tour_1.validate)(req.body);
        if (error)
            return res.status(400).send({ status: 'fail', message: error.message });
        const tour = yield Tour_1.TourModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!tour)
            return res.status(404).send({ status: 'fail', message: 'Tour not found' });
        res.status(200).send({
            status: 'success',
            data: tour,
            message: 'PUT request to update a tour',
        });
    });
}
/**
 * Updates a tour in the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
function patchTour(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { error } = (0, Tour_1.validate)(req.body);
        if (error) {
            return res.status(400).send({ status: 'fail', message: error.message });
        }
        const tour = yield Tour_1.TourModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!tour)
            return res.status(404).send({ status: 'fail', message: 'Tour not found' });
        res.status(200).send({
            status: 'success',
            data: tour,
            message: 'PATCH request to modify a property of a tour',
        });
    });
}
/**
 * Deletes a tour from the database.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
function deleteTour(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tour = yield Tour_1.TourModel.findByIdAndDelete(req.params.id);
        if (!tour)
            return res.status(404).send({ status: 'fail', message: 'Tour not found' });
        res.status(200).send({
            status: 'success',
            data: tour,
            message: `Tour ${req.params.id} has been deleted`,
        });
    });
}
exports.controllers = {
    getAllTours,
    createNewTour,
    getTour,
    updateTour,
    patchTour,
    deleteTour,
};
