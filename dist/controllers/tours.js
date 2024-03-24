"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const fs = __importStar(require("fs"));
// TODO: Once app is connected to MongoDB, delete file system data
const path = process.env.PWD;
const tours = JSON.parse(fs.readFileSync(`${path}/tours-simple.json`, 'utf8'));
function getAllTours(req, res) {
    res
        .status(200)
        .send({ status: 'success', results: tours.length, data: { tours } });
}
function createNewTour(req, res) {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${path}/tours-simple.json`, JSON.stringify(tours), err => console.log(err));
    res.status(201).send({ status: 'success', data: { tour: newTour } });
}
function getTour(req, res) {
    const tour = tours.find(el => el.id === Number(req.params.id));
    if (!tour)
        return res
            .status(404)
            .send({ status: 'fail', message: 'Tour with given id was not found' });
    res.send({ status: 'success', data: tour });
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
