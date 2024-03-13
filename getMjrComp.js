
export default function setCompletedMjrReq(selected_mjr, Student){
    let mjr_op_num = selected_mjr[0];
    let i = mjr_op_num + 1;
    const completedReq = [];
    while(i < selected_mjr.length){
        let j = 1;
        while(j < Student.length){
            if(selected_mjr[i][0] === Student[j][0]){
                completedReq.push(Student[j]);
            }
            j++;
        }
        i++;
    };

    let s = 1;
    while(s < mjr_op_num + 1){
        let j = 1;
        while(j < Student.length){
            if(selected_mjr[s][0][0] === Student[j][0]){
                completedReq.push(Student[j]);
            } else if(selected_mjr[s][1][0] === Student[j][0]){
                completedReq.push(Student[j]);
            };
            j++;
        }
        s++;
    }
    return completedReq;
};