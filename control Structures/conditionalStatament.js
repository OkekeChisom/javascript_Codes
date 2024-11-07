// control structure in js is essential for controlling the flow of execution in your code. They allow you to dictate how your
// programme should respond based on conditions.


// 1. conditional statement
// conditional statement executes a block of code if the specified condition is true or false.

// a. if statement
let temperature = 30;

if(temperature > 25) {
    console.log('it is a hot day !');
} else {
    console.log('it is a cold day');
};


const isAdmin = false;
const isSuperUser = false;

if ( isAdmin || isSuperUser) {
    console.log("You can have access to the app");
} else {
    console.log("You are not allowed to this app");
}

// Write if statement that checks if  someone has paid school fees and has also good health before the person can 
// have access to the class , else the person should go back home 
// your output should be : Welcome to the class or go back home.

// solution

const goodHealth = true;
const schoolFee = true;

if ( goodHealth || schoolFee) {
    console.log("Welcome to class");
} else {
    console.log("Go back home");
};


