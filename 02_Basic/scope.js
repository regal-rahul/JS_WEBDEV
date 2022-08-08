let iAmGlobal = 'Tony Stark';

if (true) {
    // let iAmLocal = 'HULK';
    var iAmLocal = 'HULK';
    iAmGlobal = 'Superman';
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmLocal);
console.log(iAmGlobal);