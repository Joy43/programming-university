import { Response } from "express"
type TResponse<T>
const sendResponse=<T>(
    req:Response,
    data:{
    statusCode:number,
    sucess:boolean,
    message?:string,
    data:T,

},
)=>{
    resizeBy.status(data?.statusCode).json({
        sucess:data.sucess,
        message:data.message,
        data:data.data,
    })
}
export default sendResponse;