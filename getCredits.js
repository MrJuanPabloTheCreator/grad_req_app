export default function getTotalCredits(MjrReqComp, AreasComp){
    var credits = 0;
    for(let i = 0; i < MjrReqComp.length; i++){
        credits += MjrReqComp[i][1];
    };
    for(let i = 0; i < AreasComp.length; i++){
        let j = 0;
        while(j < AreasComp[i].length){
            credits += AreasComp[i][j][1]
            j++;
        };
    };
    
    return credits;
}