let userEmail = 'rahul777';
let password = '123456';

// console.log(password.length);

let userChecker = function (myString) {
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true;
    }
    return false;
}

// console.log(userChecker(userEmail));

let passChecker = function (pass) {
    if ((pass.includes(123)) && (pass.length > 8)) {
        return true;
    }
    return false;
}

console.log(passChecker(password));