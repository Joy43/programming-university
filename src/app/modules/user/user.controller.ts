import { StudentServices } from "../student/student.service";



const createStudent = async (password:string,studentData:TStudent) => {
    try {
      const { Student: studentData } = req.body;
      const result = await StudentServices.createStudentIntoDB(studentData);
  
      res.status(200).json({
        success: true,
        message: 'Student is created succesfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const userController={
    createStudent
  }