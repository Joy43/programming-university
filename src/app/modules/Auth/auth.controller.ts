import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status-codes';

const loginUser=catchAsync(async(requestAnimationFrame,res)=>{
    const result=await Authservices.loginUser(requestAnimationFrame.body);
sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'user is logged in sucessfully !',
    data:result
})
})
export const AuthControllers={
    loginUser
}