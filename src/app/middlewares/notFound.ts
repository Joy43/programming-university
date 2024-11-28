import { NextFunction } from "express";
import httpStatus from 'http-status';

const notFound=(
    err:any,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const statusCode=500;
    const message=err.message || 'something went worng';
    return res.status(httpStatus.Not_FOUND).json({
        sucess:false,
        message:'Api Not found !',

        err:'',
    });
};