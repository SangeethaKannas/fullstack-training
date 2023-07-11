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

