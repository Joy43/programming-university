import { AnyZodObject, Schema } from 'zod';

import catchAsync from '../utils/catchAsync';

import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import httpStatus from 'http-status-codes-codes';

const auth=(Schema:AnyZodObject)=>{
    return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const token=req.headers.authorization;
        console.log(token);
        if(!token){
            throw new AppError(httpStatus.UNAUTHORIZED,'You are not authorized')
        }
        next();
    })
}
export default auth;