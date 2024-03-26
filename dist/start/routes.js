"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startRoutes = void 0;
const toursRouter_1 = require("../routes/toursRouter");
const usersRouter_1 = require("../routes/usersRouter");
const errorHandler_1 = require("../middlewares/errorHandler");
function startRoutes(app) {
    app.use('/api/v1/tours', toursRouter_1.toursRouter);
    app.use('/api/v1/users', usersRouter_1.usersRouter);
    app.use(errorHandler_1.errorHandler);
}
exports.startRoutes = startRoutes;
