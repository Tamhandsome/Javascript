let number = [3,8,6,19,20,39,59,4,7,3,80];
function dem(number){
    let demso = 0;
    for(let i of number){
        if(i <= 20){
            continue;
        }
        demso++;
    }
    return demso;
}   
console.log(dem(number))