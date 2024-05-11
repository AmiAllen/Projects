let student = //object  
{
    name: "aman",
    age: 19,
    country: "nepal"
};
console.log(student.name);
student.name = "ronaldo"; //  accessing the object value
student.age=20;
student['name'] = 'messi'; // accessing the object value
console.log(student.name);
console.log(student.age);


let colors = ['red', 'blue']; //array object
console.log(colors);
console.log(colors[1]);
colors[2] = 'yellow';
console.log(colors);
console.log(colors.length);
colors[4] = 'brown';
console.log(colors);

const c =10;
function f1(a,b)
{
    f = a+b+c;
    return f;
}
let f2 = (a,b) => a*b;
console.log("sum2: "+ f2(3,3));
function f1(a,b)
{
    f=a*b*c;
    return f;
}
console.log("sum1: "+ f1(2,5));

