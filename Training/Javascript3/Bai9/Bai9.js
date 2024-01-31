function lay_name_age(person){
    let name = person.name;
    let age = person.info.age;
    return {name, age};
    
}
let person = {
    id: 1,
    name: 'hai',
    info: {
        age: 12,
        skill: 5
    }
}
console.log(lay_name_age(person))