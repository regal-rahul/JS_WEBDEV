// const sayHello = function (name) {
//     return "Hey There, " + name + "!";
// }

// console.log(sayHello("Rahul"));

const sayHello = (name) => `Hey There, ${name}!`

// console.log(sayHello("Rahul"));


const todos = [
    {
        title: 'Buy Bread',
        isDone: true
    },
    {
        title: 'Go to Gym',
        isDone: false
    },
    {
        title: 'Practice Code',
        isDone: true
    },
    {
        title: 'Drink More Water',
        isDone: false
    },
    {
        title: 'Eat Healthy',
        isDone: true
    },
    {
        title: 'Go to Temple',
        isDone: true
    },
];

const thingsDone = todos.filter((todo) => todo.isDone === true);
// console.log(thingsDone);

const notDone = todos.filter((todo) => todo.isDone === false);

for (let todo of notDone) {
    console.log(todo.title);
}