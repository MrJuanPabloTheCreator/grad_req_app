
export default function setCompletedAreas(Student, Area_1, Area_2){
    const area1_completed = [];
    const area2_completed = [];
    const AreasCompleted = []

    for(let i = 0; i < Area_1.length; i++){
        let j = 0;
        while(j < Student.length){
            if(Area_1[i][0] === Student[j][0]){
                area1_completed.push(Student[j]);
            }
            j++;
        }
    }
    AreasCompleted.push(area1_completed);

    for(let i = 0; i < Area_2.length; i++){
        let j = 1;
        while(j < Student.length){
            if(Area_2[i][0] === Student[j][0]){
                area2_completed.push(Student[j]);
            };
            j++;
        }
    }
    AreasCompleted.push(area2_completed);
    
    return AreasCompleted;
}