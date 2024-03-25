import {RequestHandler, Request, Response, NextFunction} from 'express';
import {log} from '../logs';

export function asyncRequest(ctr: RequestHandler) {
  /**
   * Constructor function middleware that returns an async middleware function
   * Wrap in a try/catch the parameter provided
   * Handle server error by passing it to a global error handler
   * TODO: Make sure that doesn't need to return an async function
   */
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      ctr(req, res, next);
    } catch (err) {
      log.error(err);
      res.status(500).send({status: 'fail', message: 'Internal Server Error'});
    }
  };
}
