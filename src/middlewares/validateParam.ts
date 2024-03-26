import {RequestParamHandler} from 'express-serve-static-core';

const validateParam: RequestParamHandler = (req, res, next, val: string) => {
  console.log('param:', val);
  next();
};

export {validateParam};
