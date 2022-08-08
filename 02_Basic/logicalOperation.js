// && - AND operator - Both sides need to be true
// || - OR operator - One side need to be true


let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = false;

if (isVerified && isLoggedIn && hasPaymentToken && isGuest) {
    console.log("Congratulation you can access paid course");
} else if (isVerified || isGuest) {
    console.log("Allow free preview");
} else {
    console.log("MESSAGE: Please contact admin");
}
