
const Area_1 = [
    ["ANTH 105", 3],
    ["CRMJ 100", 3],
    ["ECON 206", 3],
    ["ECON 216", 3],
    ["ECON 216", 3],
    ["GEOG 250", 3], 
    ["HIST 104", 3], 
    ["HIST 105", 3],
    ["HIST 115", 3],
    ["HIST 116", 3],
    ["HONR 390", 3],
    ["MASC 150", 3],
    ["NPFT 100", 3],
    ["NPFT 221", 3],
    ["PHIL 110", 3],
    ["POLS 100", 3],
    ["PSYC 100", 3],
    ["PSYC 225", 3],
    ["SOCL 100", 3],
    ["SOCL 232", 3]
]

const Area_2 = [
    ["ENGL 130", 3],
    ["ENGL 160", 3],
    ["HONR 190", 3]
]

const Student = [
    {
        name: "Juan",
        major: "CIS",
        minor: "BS"
    },
    ["CPSC 120", 3],
    ["HIST 105", 3],
    ["ANTH 105", 3],
    ["CPSC 110", 3], 
    ["PSYC 100", 3],
    ["ENGL 130", 3],
    ["CPSC 370", 3],
    ["CPSC 380", 3],
    ["ENGL 327", 3],
    ["MATH 185", 3],
]

const majors = {
    'CIS': [
        ["CPSC 110", 3], 
        ["CPSC 120", 3],
        ["CPSC 170", 3],
        ["CPSC 250", 3],
        ["CPSC 270", 3],
        ["CPSC 305", 3],
        ["CPSC 320", 3],
        ["CPSC 370", 3],
        ["CPSC 380", 3],
        ["CPSC 410", 3, "CPSC 450", 3],
        ["ACCT 210", 3],
        ["ACCT 220", 3],
        ["BNSS 212", 3],
        ["BNSS 232", 3],
        ["ENGL 327", 3, "BNSS 412", 3],
        ["MATH 185", 3, "MATH 190", 5],
        ["MATH 200", 3, "BNSS 302", 3]
    ]
}

const CIS = [
    ["CPSC 110", 3], 
    ["CPSC 120", 3],
    ["CPSC 170", 3],
    ["CPSC 250", 3],
    ["CPSC 270", 3],
    ["CPSC 305", 3],
    ["CPSC 320", 3],
    ["CPSC 370", 3],
    ["CPSC 380", 3],
    ["CPSC 410", 3, "CPSC 450", 3],
    ["ACCT 210", 3],
    ["ACCT 220", 3],
    ["BNSS 212", 3],
    ["BNSS 232", 3],
    ["ENGL 327", 3, "BNSS 412", 3],
    ["MATH 185", 3, "MATH 190", 5],
    ["MATH 200", 3, "BNSS 302", 3]
]


const area1_completed = [];
for(let i = 0; i < Area_1.length; i++){
    let j = 0;
    while(j < Student.length){
        if(Area_1[i][0] === Student[j][0]){
            console.log("Class included in Area 1: ", Student[j][0]);
            area1_completed.push(Student[j][0]);
        }
        j++;
    }
}

const area2_completed = [];
for(let i = 0; i < Area_2.length; i++){
    let j = 0;
    while(j < Student.length){
        if(Area_2[i][0] === Student[j][0]){
            console.log("Class included in Area 2: ", Student[j][0]);
            area2_completed.push(Student[j][0]);
        };
        j++;
    }
}

const mjr = Student[0].major;
console.log(mjr);
const mjr_req_comp = [];
for(let i = 0; i < CIS.length; i++){
    let j = 0;
    while(j < Student.length){
        if(CIS[i][0] === Student[j][0]){
            console.log("Class included in Major Requirements: ", Student[j][0]);
            mjr_req_comp.push(Student[j][0]);
        }
        j++;
    }
}

console.log("######################################\n");
if(area1_completed.length >= 3){
    console.log("Area 1 Completed!");
} else {
    console.log("Area 1: Add", 3 - area1_completed.length, "classes");
}

if(area2_completed.length >= 2){
    console.log("Area 2 Completed!");
} else {
    console.log("Area 2: Add", 2 - area2_completed.length, "classes");
}

console.log("\n######################################");