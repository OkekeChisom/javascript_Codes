alert("hello jsclass");
console.log("Welcome to my website");


// three keys to hold data or information
// var 
// let
// const

var name = "Joel";
console.log(name)

let age = 40;
console.log(age);

const email = "joel@gmail.com";
console.log(email);



// datatypes
// primitive and nonprimitive 

let name2 = "philip";// this is primitive 

// number is also primitive
let age2 = 25 //integer has no decimal point 
let myNunbe = 0.78 //float has decimal point


// Boolean is also primitive
// it has to do with true or false 
let isDead = false;
let isAlive = true;


// unidentified  is also a primitive
let notAssigned;


// null 
let isActive = null;

// NON PRIMITIVE DATATYPE 
// ARRAYS 

let products = ["bag", "shoes", "cloth", "phone", "laptop"]; 
//Arrays uses square braces
console.log(products [3] [2]);

// object  it makes use of coiling braces, object have key and value
let user = {
    name: "Okeke",
    age: 20,
    email: "chisom@gmail.com",
    isStudent: false
};

console.log(user)

const aboutme = {
    id: 1,
    firstName: "ThankGod",
    lastName: "Lorenzo",
    userName: "ThankGod123",
    email: "ThankGodlorenzo@example.com",
    password: "securedpassword124",
    phone: "+2344196193",
    address: {
        street: "54 avala st",
        city: "Onitsha",
        state: "Anambra",
        postalcode: "100001",
        country: "Biafra",
    },
    dateOfbirth: "2000-09-10",
    isActive: true,
    roles: ["user", "admin"],
    lastLogin: "2024-10-14T10:30:00z"
};

console.log(aboutme)

// operators 


// ASSIGNMENT 1 
var length = 30; 
var weigth = 20;
 area = length*weigth;
 console.log("Area of rectangle is ", area);



// ASSIGNMENT 2     
let firstName = "John", lastName = "Doe"; age = 35, isStudent = true;
console.log( firstName, lastName, age, isStudent);


// ASSIGNMENT 3     
let  favouriteMovies = ["Supernatural", "Merlin", "Passion of Christ", "Macbeth", "Glee"];
console.log(favouriteMovies [1],);
console.log(favouriteMovies [4]);


// ASSIGNMENT 4 

let Book = {
    Title: "Love from christ",
    Author: "Joel ThankGod",
    publishedYear: 2023,
    Genres: ["Faith", "Fantasy", "Romance", "Tragedy"],
    isAvailable: true
}
console.log(Book)


// exercises 

// document.getElementById('but').addEventListener("submit", doFunction)
// // function doFunction(event){
//     // alert(20 + 20);
//     // console.log(alert);
// // }
  

// function logger(){
//     console.log('helo bro');
//     console.log('helo bro');
//     console.log('helo bro');
//     console.log('helo bro');
// }
// logger()


// function upperCase(text) {
//     const name = "david";
//     const youtuber ="gaddon martins";
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }
// upperCase(name);
// upperCase(youtuber);


// //   the correct one on how to use function to change to upperCase 
// const name = "david";
// const youtuber = "gaddon martins";
// function upperCase(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }
// upperCase(name);
// upperCase(youtuber);
  
    //  prompt 
// let bed = window.prompt("Type YES, NO, or MAYBE. Then click Ok.");
// if (bed === "YES") {
//     console.log("You said YES");
// } else if (bed === "NO") {
//     console.log("You said NO");
// } else if (bed === "MAYBE") {
//     console.log("You said MAYBE");
// } else {
//     console.log("What!!");
// }
//    pause function 
// function pause() {
//     const start = new Date().getTime();
//     while (new Date().getTime() - start < 3000);
//     console.log('Hello');
// }
// pause();
// console.log('Another log message.');