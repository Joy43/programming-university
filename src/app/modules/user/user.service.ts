import AppError from "../../errors/AppError";
import { TLoginUser } from "../Auth/auth.model";
import { User } from "./user.model";
import httpStatus from 'http-status-codes';

const loginUser=async(payload:TLoginUser)=>{
  // --------checking if the user is exist
  const isUserExits=await User.findOne({id:payload})
  console.log(
    isUserExits
  )
  if(!isUserExits){
    throw new AppError(httpStatus.NOT_FOUND,'the user is not found')
  }
// ----checking deleted-------
const isDeleted=isUserExits?.isDeleted;
if(isDeleted){
  throw new AppError(httpStatus.FORBIDDEN,'USER IS DELETED !')
}
// checking if the user is blocked

  // checking if the user is blocked

  const userStatus = user?.status;

  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  //checking if the password is correct
const ispasswordcheacking=

  console.log(payload)
  return {};
};
export const AuthServices={
loginUser
}