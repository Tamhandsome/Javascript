function lay_so_khac_nhau(a, b) {
    let c = [];
    let manggop = a.concat(b);
    
    for (let number of manggop) {
        if (!a.includes(number) || !b.includes(number)) {
            c.push(number);
        }
    }
    return c;
}

let a = [1, 2, 3];
let b = [3, 2, 5, 7];
console.log(lay_so_khac_nhau(a, b));

