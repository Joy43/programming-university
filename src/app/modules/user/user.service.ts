import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";

const createStudentIntoDB = async (student: Student) => {
    const result = await StudentModel.create(student);
    return result;
  };
  export const UserService={
    createStudentIntoDB
  }