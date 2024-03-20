import 'dotenv/config';
import express from 'express';
import {log} from './logs';
import {startMiddlewares} from './start/middlewares';
import {startRoutes} from './start/routes';

const app = express();

startMiddlewares(app);

startRoutes(app);

const port = process.env.PORT || 8081;
app.listen(port, () => log.server(`Ready on port ${port}`));
