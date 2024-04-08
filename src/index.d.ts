import * as express from 'express-serve-static-core';

declare global {
  namespace Express {
    // Inject additional properties to express.Request
    interface Request {
      /**
       * property customField is a test property
       */
      customField?: string;
      customUser: {
        _id: string;
      };
    }
    interface ParamsDictionary {
      id: string;
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      DEBUG: string;
      PORT: string;
      ATLAS_URI: string;
      COMPASS_URI: string;
      JWT_SECRET_KEY: string;
    }
  }
}
