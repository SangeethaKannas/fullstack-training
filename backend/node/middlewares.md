import { NextFunction, request, response } from express;

import { body, validationResult, query, param } from 'express-validator';


const simpleValidationResult = validationResult.withDefaults(  {
     formatter: (err) => err.msg,
})

export const checkForErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = simpleValidationResult(req);

  if(!errors.isEmpty()) {
     return res.status(422).json(errors.mapped())
  }

}



import { body, param, query} from 'express-validator'

import { checkForErrors} from '../helperValidation'

export const createDeviceMiddleware = [
  body('serial').isString().withMessage('Must be valid string')
  body('region').isString(). withMessage('Must be valid region'), checkForEerrors


]