import { Student } from './student.model';
// --get all student services----------
const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  .populate('admissionSemester')
  .populate({
    path:'academicDepartment',
    populate:{
      path:'academicFaculty'
    }
  })
  return result;
};
// get single student--------
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id)
  .populate('admissionSemester')
  .populate({
    path:'academicDepartment',
    populate:{
      path:'academicFaculty'
    }
  })
  return result;
};
// -----------delete student serveice----------
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};