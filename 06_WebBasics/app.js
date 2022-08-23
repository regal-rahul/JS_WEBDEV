// const myParaElement = document.querySelector('p');
// console.log(myParaElement);

// myParaElement.textContent = 'Paragraph being changed';

const myParaElement = document.querySelectorAll('p');

// myParaElement.forEach(function (p) {
//     p.textContent = 'I am changed using loop in JS.'
//     // p.remove();
// });

myParaElement.forEach((p) => (p.textContent = 'I am being changed using loop in JS'));

const myNewPara = document.createElement('p');
myNewPara.textContent = 'I was added using JS';
document.querySelector('body').appendChild(myNewPara);