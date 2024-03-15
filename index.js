import { majors } from "./data.js";
import { Student } from "./data.js";
import { Area_1, Area_2 } from "./data.js";
import setCompletedAreas from "./getAreasComp.js";
import getTotalCredits from "./getCredits.js";
import setCompletedMjrReq from "./getMjrComp.js";
import { cores } from "./data.js";
import getMajorCoreCompleted from "./getMjrCore.js";
import getMinorComp from "./getMinorComp.js";
import { minors } from "./data.js";


const selected_mjr = majors[Student[0].major];
const selected_core = cores[selected_mjr[0][0]];

const MjrReqComp = setCompletedMjrReq(selected_mjr, Student);
const AreasComp = setCompletedAreas(Student, Area_1, Area_2);
const TotalCredits = getTotalCredits(Student);

console.log(Student[0].major,"Major classes completed:", MjrReqComp);

var completedMjrCore;
if(selected_mjr[0][0] != ''){ //Major Core Requirements check
    completedMjrCore = getMajorCoreCompleted(selected_core, Student);
    console.log(selected_mjr[0][0], "Core Completed:", completedMjrCore);
}

var completedMinor;
if(Student[0].minor){
    const selected_minor = minors[Student[0].minor];
    completedMinor = getMinorComp(selected_minor, Student);
    console.log(Student[0].minor, "Minor classes Completed:", completedMinor);
}

console.log("General core classes completed:", AreasComp);
console.log("Total Credits:", TotalCredits, "/120");