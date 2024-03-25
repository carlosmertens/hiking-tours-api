import mongoose from 'mongoose';
import {log} from '../logs';

export function startDB() {
  /**
   * Function to start database connection
   * Use mongoose to connect to MongosDB Atlas cloud
   */

  mongoose
    .connect(process.env.COMPASS_URI as string)
    .then(() => log.db('MongoDB connected'))
    .catch(error => log.error(error));
}
