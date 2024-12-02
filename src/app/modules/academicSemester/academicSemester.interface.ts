export type TMonth=
| "January"
| "February"
| "March"
| "April"
| "May"
| "June"
| "July"
| "August"
| "September"
| "October"
| "November"
| "December";
export type TAcademicSemseterName='Autum'|'Summer'|'Fall'
export type TAcademicSemseterCode='01'|'02'|'03'

export type TAcademicSemseter={

    name:TAcademicSemseterName,
    code:TAcademicSemseterCode
    year:Date,
    startMonth:TMonth
    endMonth:TMonth
}