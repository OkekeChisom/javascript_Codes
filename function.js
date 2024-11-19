// Function
// Function is a block of code that performs an action and its reuseable.
// Types of function
// 1. function declaration
function add(a, b){
    return(a + b)
}
add(2, 4);
const sum = add(2, 4);
console.log(sum);


function mul(a, b, c){ 
    return(a * b * c)
}
const total = mul(2, 2, 2)
console.log(total);

function greet(name){
    console.log(`Hello ${name} welcome to my app`)
}
greet("Emmanuel");
greet("Jerome");


const name = "Charsle"
console.log(`hello ${name}`)

function About(name, course){
    console.log(`hello my Name is ${name}, i am studying ${course} at New Horizon college`);
}
About("chisom", "Full Stack Web Development" );

// 2. Function Expression
const add2 = function (a, b) {
    return a + b;
}
const sum2 = add2(23, 24);
console.log(sum2)

const calc = function(name, dourse, school) {
    console.log(`hello i am  ${name}, studying ${dourse}, at ${school}`)
}
calc ("chika", "fullStack", "New Horizon College")

// Assignment 1
// 3. Arrow function is a type of  function that  allow us to write shorter function syntax, it looks like this
//Assignment 2
let app = (name) => { // i created a function that welcomes someone to my application
    console.log(`Hello ${name}, You are welcome to my new application`);
}
app("Chidimma")
//Assignment 3
let dancer = (a, b) => { // in  this  i created a variable dancer assign the argument and add the arrow function 
    return a + b; // here i use the return to tell the function that we are adding just two values
}
let tol = dancer(1, 2) // so here i created another variable tol and call on the function name and insert the problem
console.log(tol) // and finally console log

//Assignment 4
// Here i will create a function that returns the modulus(%) of 2 numbers using arrow function
let mod = (a, b) => {
    return a % b;
}
let modreturn = mod(2, 15);
console.log(modreturn)