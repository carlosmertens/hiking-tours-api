"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startRoutes = void 0;
const toursRouter_1 = require("../routes/toursRouter");
const usersRouter_1 = require("../routes/usersRouter");
function startRoutes(app) {
    app.use('/api/v1/tours', toursRouter_1.toursRouter);
    app.use('/api/v1/users', usersRouter_1.usersRouter);
}
exports.startRoutes = startRoutes;
