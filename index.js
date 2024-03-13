import { majors } from "./data.js";
import { Student } from "./data.js";
import { Area_1, Area_2 } from "./data.js";
import setCompletedAreas from "./getAreasComp.js";
import getTotalCredits from "./getCredits.js";
import setCompletedMjrReq from "./getMjrComp.js";

const stu_mjr = Student[0].major;
const selected_mjr = majors[stu_mjr];

const MjrReqComp = setCompletedMjrReq(selected_mjr, Student);
const AreasComp = setCompletedAreas(Student, Area_1, Area_2);
const TotalCredits = getTotalCredits(MjrReqComp, AreasComp);
console.log("Major classes completed:", MjrReqComp);
console.log("Core classes completed:", AreasComp);
console.log("Total Credits:", TotalCredits, "/120");