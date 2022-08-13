let getMyGrade = (marksObtained, TotalMarks) => {
    let myPercent = (marksObtained / TotalMarks) * 100;

    let myGrade = '';

    if (myPercent >= 90) {
        myGrade = 'A';
        // console.log(`You got ${myGrade} grade and percentage is ${myPercent}.`);
    } else if (myPercent >= 80) {
        myGrade = 'B';
        // console.log(`You got ${myGrade} grade and percentage is ${myPercent}.`);
    } else if (myPercent >= 70) {
        myGrade = 'C';
        // console.log(`You got ${myGrade} grade and percentage is ${myPercent}.`);
    } else if (myPercent >= 60) {
        myGrade = 'D';
        // console.log(`You got ${myGrade} grade and percentage is ${myPercent}.`);
    } else if (myPercent >= 50) {
        myGrade = 'E';
        // console.log(`You got ${myGrade} grade and percentage is ${myPercent}.`);
    } else {
        myGrade = 'F';
        // console.log(`You got ${myGrade} grade! Work hard! Your percentage is ${myPercent}.`);
    }
    return `Your grade is ${myGrade} and percentage is ${myPercent}.`
};

let result = getMyGrade(99, 112);
console.log(result);