"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.toursRouter = express_1.default.Router();
exports.toursRouter
    .route('/')
    .get((req, res) => res.send({ message: 'GET all tours' }))
    .post((req, res) => res.send({ message: 'POST new tour' }));
exports.toursRouter
    .route('/:id')
    .get((req, res) => res.send({ message: 'GET a tour by id' }))
    .put((req, res) => res.send({ message: 'PUT request to update tour' }))
    .patch((req, res) => res.send({ message: 'PATCH request to modify a tour' }))
    .delete((req, res) => res.send({ message: 'DELETE a tour' }));
