function myValidation() {
    let myValue = document.getElementById('myForm').value;
    let myPara = document.getElementById('one');
    console.log(myPara);
    
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log('Invalid Input');
        myPara.textContent = 'Enter number between 0 and 20'
    } else {
        console.log('Valid Input');
        myPara.textContent = 'Your input is: ' + myValue;
    }
}