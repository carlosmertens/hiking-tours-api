"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
function getAllTours(req, res) {
    res.send({ message: 'GET all tours' });
}
function createNewTour(req, res) {
    res.send({ message: 'POST a new tour' });
}
function getTour(req, res) {
    res.send({ message: 'GET a tour by id' });
}
function updateTour(req, res) {
    res.send({ message: 'PUT request to update a tour' });
}
function patchTour(req, res) {
    res.send({ message: 'PATCH request to modify a property of a tour' });
}
function deleteTour(req, res) {
    res.send({ message: 'DELETE a tour' });
}
exports.controller = {
    getAllTours,
    createNewTour,
    getTour,
    updateTour,
    patchTour,
    deleteTour,
};
