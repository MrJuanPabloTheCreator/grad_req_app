
export default function getMinorComp(selected_minor, Student){
    let min_op_num = selected_minor[0];
    let i = min_op_num + 1;
    const completedReq = [];
    while(i < selected_minor.length){
        let j = 1;
        while(j < Student.length){
            if(selected_minor[i][0] === Student[j][0]){
                completedReq.push(Student[j]);
            }
            j++;
        }
        i++;
    };

    let s = 1;
    while(s < min_op_num + 1){
        let j = 1;
        while(j < Student.length){
            let f = 0;
            while(f < selected_minor[s].length){
                if(selected_minor[s][f][0] === Student[j][0]){
                    completedReq.push(Student[j]);
                } 
                f++;
            }
            j++;
        }
        s++;
    }
    return completedReq;
};