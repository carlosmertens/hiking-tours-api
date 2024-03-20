"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMiddlewares = void 0;
const logger_1 = require("../middlewares/logger");
function startMiddlewares(app) {
    app.use(logger_1.logger);
}
exports.startMiddlewares = startMiddlewares;
