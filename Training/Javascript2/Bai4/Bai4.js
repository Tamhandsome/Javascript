function add_value(a,x,y){
    a.splice(x,0,y);
    return a;
}
let a = [2,3,8,9,4,5,6];
let x = 3; // vị trí chèn
let y = 20; // giá trị chèn
console.log(add_value(a,x,y));