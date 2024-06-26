"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const logs_1 = require("./logs");
const db_1 = require("./start/db");
const middlewares_1 = require("./start/middlewares");
const routes_1 = require("./start/routes");
const app = (0, express_1.default)();
(0, db_1.startDB)();
(0, middlewares_1.startMiddlewares)(app);
(0, routes_1.startRoutes)(app);
const port = process.env.PORT || 8081;
app.listen(port, () => logs_1.log.server(`Ready on port ${port}`));
