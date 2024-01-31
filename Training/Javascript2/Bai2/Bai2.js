function getValue(a, x) {
    if (x >= 0 && x < a.length) {
        return a[x];
    } else {
        return undefined;
    }
}
let a = [10, 20, 30, 40, 50];
let x = 4;
console.log("Giá trị tại vị trí", x, "là:", getValue(a,x));