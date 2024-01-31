let student = [
    {name: 'tam', age: 20},
    {name: 'quan', age: 21},
    {name: 'manh', age: 22},
    {name: 'khai', age: 23},
    {name: 'cong', age: 24},
    {name: 'phong', age: 25},
    {name: 'thuan', age: 26},
    {name: 'minh', age: 27},
    {name: 'thang', age: 28},
    {name: 'nam', age: 29},
]
console.log(student[3]);
console.log('Name student 3: ',student[3].name);
console.log('Do dai cua mang: ',student.length);
let newStudent1 = {
    name: 'hai',
    age: 30
};
student.unshift(newStudent1)
console.log('Mang sau khi them moi student vao dau mang: ', student);
let newStudent2 = {
    name: 'tran',
    age: 29
};
student.push(newStudent2);
console.log('Mang sau khi them moi student vao cuoi mang', student);
delete student[5];
console.log('Mang sau khi xoa phan tu thu 5: ', student);
student[4] = student[6];
let StudentNameHai = student.find(student => student.name.toLowerCase() === 'hai');
console.log('Sinh vien co ten la Hai:', StudentNameHai);
