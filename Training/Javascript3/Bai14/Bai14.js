function tim_id(person){
    return person.find(({id}) => id == 2)
}
let person = [
    {id:1, name:'hai'},
    {id:2, name:'hai2'},
    {id:3, name:'hai3'},
    {id:4, name:'hai4'},
    {id:5, name:'hai5'}
]
console.log(tim_id(person))