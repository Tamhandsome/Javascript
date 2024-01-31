function tinh_tong(a){
    let sum = 0;
    for(let number of a){
        if(!isNaN(number)){
            sum += number;
        }
    }
    return sum;
}
let a = [2,4,6,'tam',7,'ok'];
console.log(tinh_tong(a))