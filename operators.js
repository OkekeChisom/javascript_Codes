// operators in js are special symbols that perform operations on one or more errands in our js file system 

// 1. Arithmetic operations
// addition
 let sum = 5 + 3;
console.log(sum)

// Subtractions
let difference = 10 - sum;
console.log(difference);

//Multiplication
let product = sum * difference;
console.log(product);

//Division
let quotient = product / 4;
console.log(quotient);

//Modulus
let remainder = quotient % 3;
console.log(remainder);

//2. Assignment Operators
//These operators assign values to variables

//assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5;
y += 1;
console.log(y)

// subtraction assignment 
let z = 10;
z -= y;
console.log(z);

//2. Comparison operators
// These operators compare values and return a boolean value

//Equal
console.log(5 =="5");

//strict Equal
console.log(5 === "5");

//Not Equal
console.log(5 != "4");

let u = 4;
let v = 5;
console.log(u != v);
// if (u != v) {
    
//     alert("cool");
// }
//strict Not Equal
console.log(5 !== "5");
let f = "chisom";
let d = 20;
console.log( f !== d);

//Greater than
console.log(10 > 5);
let g = 12;
let k = 10;
let j = g + k
console.log(k > g);

//less than
console.log(3 < 2);
let prize = 12;
let rice = 10;
let total = prize - rice;
console.log( j < total);

// greater than and equal
console.log(4 >= 5);
let gad = 6;
let phil = 6;
let chidi = gad * 2
console.log(gad >= phil);

let olu = phil - 3;

console.log(chidi >= olu); //



    // Assignment 2
// use logical operators and declare four variables that logs true or false, that logs boolean value on console.log
// using comments on the vs code editor, explain the meaning and how it functions.

let op = 25;
let po = 26;
let pi = "nick";
let da = "fick";
console.log( op === 25 && po === 26); // this  is for and note : if one is wrong and another is correct all will be false
console.log(pi === "nick" || da === "fick"); // this is for OR note : if one is wrong and the other is right all will be true








let india = "gabriel";
let china = "alex";
let nigeria = "wuhan";
let america = "ojukwu"
console.log(india === "gabriel" && china ==="alex" || nigeria === "wuhan" && america === "ojukwu");

// This is how it works, first i assigned values to the four variables i created and i console logged them all, 
// using the logical operator method which is like asking questions like this:
//is india equal to gabriel and is china still equal to alex or is nigeria  equal to wuhan and america equal to ojukwu.
// And note if the first two values are right and the ones after and is wrong , the answer will always be true, so all the values have to be correct.
//Why this happens is because the browser checks the first values before the or.
// and if the first two is wrong and others are right it is true


// logical operators
// (&&) And operator
const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive);

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry;
console.log(canEnter);

//(||) OR operator
const knowHTML = false;
const knowCSS = true;
const canDesignWebsite = knowHTML || knowCSS;
console.log(canDesignWebsite);

const isAdmin = false;
const isSuperUser = false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage);
