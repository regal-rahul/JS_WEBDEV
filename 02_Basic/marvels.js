// 


const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

// numbers[2] = 'SOMETHING';
// console.log(numbers);

//start
// console.log(numbers.shift());
// console.log(numbers);

// numbers.unshift('SOMETHING');
// console.log(numbers);

//end
// console.log(numbers.pop());
// console.log(numbers);

// numbers.push('SOMETHING');
// console.log(numbers);

// middle
numbers.splice(2, 2, 'SOMETHING');
console.log(numbers);