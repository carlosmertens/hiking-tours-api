"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send({ app: 'Hiking Tours API', message: 'Welcome to Hiking Tours API' });
});
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Server ready on port ${port}...`));
