export default function getTotalCredits(Student){
    var credits = 0;
    let i = 1;
    while(i < Student.length){
        credits += Student[i][1]
        i++;
    }
    
    return credits;
}