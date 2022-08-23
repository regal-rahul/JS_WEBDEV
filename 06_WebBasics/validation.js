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


// form validation

document.querySelector('.bigForm').addEventListener('submit', (e) => {

    const passFirst = document.getElementById('passOne').value;
    // console.log(passFirst);
    const passSecond = document.getElementById('passTwo').value;

    if (passFirst === passSecond) {
        e.preventDefault();
        console.log(e.target.username.value);
        e.target.username.value = '';
        e.target.email.value = '';
        e.target.password.value = '';
        alert('Successfully submitted the form.')
    } else {
        e.preventDefault();
        alert('Password does not match');
        console.log('Form not submitted');
    }

    
    
})