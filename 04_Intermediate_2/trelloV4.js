// const myTodos = ['Buy Bread', 'Go to Gym', 'Practice Code'];

// console.log(myTodos[myTodos.indexOf('Buy Bread')]);


const newTodos = [
    {
        title: 'Buy Bread',
        isDone: false
    },
    {
        title: 'Go to Gym',
        isDone: false
    },
    {
        title: 'Practice Code',
        isDone: true
    }
];

// const index = newTodos.findIndex(function (todo, index) {
//     console.log(todo);
//     return todo.title === "Go to Gym";
// });

// console.log(index);


// 1 Method
// const findTodo = function (myTodos, title) {
//     const index = myTodos.findIndex(function (todo) {
//         return todo.title.toLowerCase() === title.toLowerCase();
//     })
//     return myTodos[index];
// }

// let result = findTodo(newTodos, 'go To gym');
// console.log(result);

// 2 method

const findTodo = function (myTodos, title) {
    const titleReturned = myTodos.find(function (todo) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned;
}
let result = findTodo(newTodos, 'go To gym');
console.log(result);