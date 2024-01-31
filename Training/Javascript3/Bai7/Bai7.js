function so_chia_het_cho_2(a){
    let b = [];
    for(let number of a){
        if(number % 2 == 0){
            b.push(number);
        }
    }
    return b;
}
let a = [3,4,5,6,7,2,10];
console.log(so_chia_het_cho_2(a));