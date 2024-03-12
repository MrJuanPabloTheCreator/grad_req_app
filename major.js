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
    ["MATH 185", 3],
    ["BNSS 412", 3]
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
        ["CPSC 410", 3],
        ["CPSC 450", 3],
        ["ACCT 210", 3],
        ["ACCT 220", 3],
        ["BNSS 212", 3],
        ["BNSS 232", 3],
        ["ENGL 327", 3],
        ["BNSS 412", 3],
        ["MATH 185", 3],
        ["MATH 190", 5],
        ["MATH 200", 3],
        ["BNSS 302", 3]
    ],
    'ECON': [
        ["ECON 100", 3],
    ],
    'HIST':[
        ["HIST 105", 3],
    ]
}

const mjr = Student[0].major;
const majorArray = majors[mjr];

const mjr_req_comp = [];
const classesLeft = [];
for(let i = 0; i < majorArray.length; i++){
    let j = 0;
    while(j < Student.length){
        if(majorArray[i][0] === Student[j][0]){
            console.log("Class included in Major Requirements: ", Student[j][0]);
            mjr_req_comp.push(Student[j][0]);
        }
        j++;
    }
}

for(let i = 0; i < mjr_req_comp.length; i++){
    console.log(mjr_req_comp[i], "Completed")
}

for(let i = 0; i < classesLeft.length; i++){
    console.log(classesLeft[i], "Missing")
}