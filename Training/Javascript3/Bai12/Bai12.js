let person = [
    {id: 1, name: 'hai'},
    {id: 2, name: 'hai2'},
    {id: 3, name: 'hai3'},
    {id: 4, name: 'hai4'},
    {id: 5, name: 'hai5'}
]
function kiem_tra(person){
    for(let kt of person){
        if(kt.name === 'hai'){
            return true;
        }
    }return false;
}
console.log(kiem_tra(person))