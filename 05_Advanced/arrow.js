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
    // console.log(todo.title);
}


const cameras = {
    price: 50000,
    weight: 2000,
    brand: "NIKON",
    myDes: function () {
        return `This ${this.brand} camera is ${this.weight} grams and costs ${this.price} rupees.`
    }
}

console.log(cameras.myDes());

// const func = () => {key: 'value'}; //undefined
// const func = () => ({key: 'value'}); // a () would help in redux.