function tinhtongmang(a){
    let sum = 0;
    for(let number of a){
        sum += number ;
    }
    return sum;
}
let a = [2,4,6,4,3,7,8,9];
console.log('Tong của mang la: ', tinhtongmang(a));
