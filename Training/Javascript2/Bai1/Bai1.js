function kiem_tra(x){
    if(Number.isInteger(x) > 0 ){
        return true;
    }else{
        return false;
    }
}
let x = 1.9 ;
console.log(kiem_tra(x));