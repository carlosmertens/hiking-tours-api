import {RequestParamHandler} from 'express';

const validateParam: RequestParamHandler = (req, res, next, val: string) => {
  console.log(val);
  next();
};

export {validateParam};
