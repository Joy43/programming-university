import { model, Schema } from "mongoose";
import { Tuser } from './user.interface';


const userSchema=new Schema<Tuser>({
    id:{
        type:String,
        require:true,

    },
    password:{
        type:String,
        required:true,
    },

    needsPasswordChange:{
        type:Boolean,
        default:true,
        },
        role:{
type:String,
enum:['student','faculty','admin'],

        },
        status:{
type:String,
enum:['in-progress','blocked'],
default:'in-progress'

        },
        isDeleted:{
        type:Boolean,
        default:false

        },
        // createdAt:{
        //     type:Date,
        //     default:Date.now()
        // }

    
},{timestamps:true} );
export const User=model<Tuser>('User',userSchema)