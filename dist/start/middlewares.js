"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMiddlewares = void 0;
const express_1 = __importDefault(require("express"));
const logger_1 = require("../middlewares/logger");
function startMiddlewares(app) {
    const path = process.env.PWD;
    app.use(express_1.default.static(`${path}/public`));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(logger_1.logger);
}
exports.startMiddlewares = startMiddlewares;
