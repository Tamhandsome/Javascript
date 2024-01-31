function doi_age(person){
    person.info.age = 20;
    return person;
}
let person = {
    id: 1,
    name: 'hai',
    info: {
        age: 12,
        skill: 5
    }
}
console.log(doi_age(person))