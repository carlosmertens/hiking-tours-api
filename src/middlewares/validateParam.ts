import {RequestParamHandler} from 'express';

const validateParam: RequestParamHandler = (req, res, next, val: string) => {
  console.log('param:', val);
  next();
};

export {validateParam};
