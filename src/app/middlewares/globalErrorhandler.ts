/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const globalErrorHandler:ErrorRequestHandler=(
  err,
  req,
  res,
  next,
) => {
  // setting default valude
  let statusCode = 500;
  let message = err.message || 'Something went wrong!';
 
  type TErrorsouce={
    path:string |number;
    message:string
  }[];

  const errorSources:TErrorsouce=[{
path:'',
message:'something was worng',
  }];
const handleZodError=(err:ZodError)=>{


 const statusCode=400;
 return {
  statusCode,
  message:'validation error'
 
 }
}

  if(err instanceof ZodError){
    const simplifiedError=handleZodError(err)
 statusCode=simplifiedError?.statusCode;
 message=simplifiedError?.message
    console.log(simplifiedError)
  }

  return res.status(statusCode).json({
    success: false,
    message,
    // error: err,
    errorSources
  });
};

export default globalErrorHandler;