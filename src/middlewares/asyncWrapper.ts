import {RequestHandler} from 'express-serve-static-core';
import {Request, Response, NextFunction} from 'express-serve-static-core';

/**
 * Wraps an Express middleware function in an async function that catches any errors and sends a response.
 * @param ctr - the middleware function to wrap
 * @returns an async function that takes the request, response, and next function as parameters
 */
export function asyncWrapper(ctr: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctr(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
