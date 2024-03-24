"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const debug_1 = __importDefault(require("debug"));
const db = (0, debug_1.default)('dev:db');
const error = (0, debug_1.default)('dev:error');
const http = (0, debug_1.default)('dev:http');
const server = (0, debug_1.default)('dev:server');
exports.log = { db, error, http, server };
