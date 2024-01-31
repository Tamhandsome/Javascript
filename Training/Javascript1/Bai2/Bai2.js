let student = {
    name: 'tam',
    age: 20,
    detail: {
        height: 160,
        phone: 888902394
    } 
};
student.age = 100;
student.detail.phone = 892344444;
delete student.detail.height;
console.log('Name: ', student.name)
console.log('Age: ', student.age)
console.log('detail: ', student.detail)
console.log('name' in student)
