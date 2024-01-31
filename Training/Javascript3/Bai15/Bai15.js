let person = [
    {id: 1, age: 23},
    {id: 2, age: 26},
    {id: 3, age: 30},
    {id: 4, age: 12},
    {id: 5, age: 40},
    {id: 6, age: 8}
]
function age_tren_18(person){
    let result = person.filter((person) => person.age > 18)
    return result;
}
console.log(age_tren_18(person));