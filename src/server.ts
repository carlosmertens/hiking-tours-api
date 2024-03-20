import 'dotenv/config';
import express from 'express';
import {Request, Response} from 'express-serve-static-core';
import {log} from './logs';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send({app: 'Hiking Tours API', message: 'Welcome to Hiking Tours API'});
});

const port = process.env.PORT || 8081;
app.listen(port, () => log.server(`Ready on port ${port}`));
