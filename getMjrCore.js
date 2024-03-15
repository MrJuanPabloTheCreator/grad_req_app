export default function getMajorCoreCompleted(selected_core, Student){
    const result = [];
    let i = 1;
    while(i < Student.length){
        let j = 0;
        while(j < selected_core.length){
            if(selected_core[j][0] === Student[i][0]){
                result.push(selected_core[j]);
            }
            j++;
        }
        i++;
    }
    return result;
}