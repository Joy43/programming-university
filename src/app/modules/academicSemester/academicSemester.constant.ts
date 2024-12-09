import { TAcademicSemesterCode, TAcademicSemesterName, TAcademicSemesterNameCodeMapper, TMonth } from "./academicSemester.interface";


// List of months used across the application
export const months: TMonth[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Academic semester names (e.g., Autumn, Summer, Fall)
export const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autumn", "Summer", "Fall",
];

// Corresponding codes for each academic semester
export const AcademicSemesterCode: TAcademicSemesterCode[] = [
  "01", "02", "03",
];

// Mapping of semester names to their codes
export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

