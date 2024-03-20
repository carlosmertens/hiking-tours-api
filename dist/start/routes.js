"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startRoutes = void 0;
const toursRouter_1 = require("../routes/toursRouter");
function startRoutes(app) {
    app.use('/api/tours', toursRouter_1.toursRouter);
}
exports.startRoutes = startRoutes;
