import { TAcademicSemseter } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

const findLastStudentId=async()=>{
    const lastStudent=await User.findOne(
        {
            role:'student',

        },
        {
            id:1,
            _id:0,
        },
    ).lean()
    // 203001 0001
    return lastStudent?.id? lastStudent.id:substring(6);
}
//  year semesterCode 4 digit number
export const generateStudentId=(payload:TAcademicSemseter)=>{
    // first time 0000
    const currentId=(0).toString().padStart(4,'0');
    let incrementId=(Number(currentId)+1).toString();
    incrementId=`${payload.year}${payload.code}${incrementId}`;
    return incrementId;
}