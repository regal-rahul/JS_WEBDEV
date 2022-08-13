// console.log('John');

let name = 'John';
let number = '9';
// let sayHello = function () {
//     console.log('Hello Buddy!');
//     console.log('Hi ');
// };
// sayHello();

// let sayHello = function (name) {
//     console.log(`Greeting message for ${name}`);
//     console.log(`Hey ${name}`);
// }('John');

// let fullNameMaker = function (firstName, lastName) {
//     console.log(`Welcome ${firstName} ${lastName}, Happy to have you.`);
// }('Rahul', 'Kumar');

// let myAdder = function (num1, num2) {
//     let added = num1 + num2;
//     return added;
// }
// console.log(myAdder(9, 9));

// let myMultiplier = function (num1, num2) {
//     return num1 * num2;
// }
// console.log(myMultiplier(9, 9));

let guestUser = function(name = 'unNamed', courseCount = 0) {
    return 'Hello ' + name + ' and your course count is ' + courseCount;
}
console.log(guestUser('Rahul'));
