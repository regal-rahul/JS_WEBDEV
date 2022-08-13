// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];

// console.log(days[0]);

// let sayHello = function (name) {
    // console.log(`Greeting message for ${name}`);
    // console.log(`Hey ${name}`);
// };

// days.forEach(function (day, index) {
//     console.log(`Today is ${day} at ${index + 1}`);
// });

// console.log(days.length);
// for (let i = 0; i < days.length; i++) {
//     // const element = days[i];
//     console.log(days[i]);
// }
// for (let i = days.length - 1; i >= 0; i--){
//     console.log(days[i]); 
// }

// const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];

// months.forEach((month, index) => {
//     console.log(`Month ${index + 1} is ${month}`);
// });

// const todos = ['Clean House', 'Buy a shirt', 'Learn JS', 'Build a project'];

///// todos.forEach((todo, index) => {
//     console.log(`On day ${index + 1} ${todo}`);
// });

const myTodos = [];
// myTodos.push('Buy Bread');
// myTodos.push('Go to Gym');
// myTodos.push('Eat Salad');
// myTodos.forEach((todo, i) => {
//     console.log(`Your task ${i + 1} is: ${todo}`);
// });

myTodos.unshift('Practice code');
myTodos.unshift('Build projects');
myTodos.unshift('Eat salad');

for (let i = 0; i < myTodos.length; i++) {
    console.log(`Your task ${i + 1} is: ${myTodos[i]}`);  
}
