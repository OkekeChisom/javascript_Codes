// loops are used to execute a block of code repeatedly until specific conditions are met.
// 1. for loop
for (let i = 0; i < 10; i++) {
    console.log("Hello from loop  " + i);
};

const colors = ["red", "yellow", "blue", "black"];
for ( let i = 0; i < colors.length; i++) {
    console.log( "colors :", colors [i]);
}

const fruts = ["orange", "pawpaw", "guava", "watermelon"];
for ( let order = 0; order < fruts.length; order++) {
    console.log("fruits:" ,fruts [order]);
}

const students = [
    {name: "Okeke", grade: 95},
    {name: "Chisom", grade: 90},
    {name: "ThankGod", grade: 79},
    {name: "Lorenzo", grade: 80},
]

for ( let i = 0; i < students.length; i++) {
    console.log("students:", students[i].name, "Grade:", students[i].grade);

}

const AboutMe = [
    {Name: "Okeke Chisom", School: "New Horizon", Course: "FrontEnd"},
]

for ( let i = 0; i < AboutMe.length; i++) {
    console.log("Name:" , AboutMe[i].Name, "Attending:", AboutMe[i].School, "Studying:", AboutMe[i].Course);
}

// 2. While loops
let i = 0;
while ( i < 5 ) {
    console.log("welcome dude " + i)
    i++;
}
 

// Assignment
const ClassDetails = [
    {Name: "Okeke Chisom", Age: 20, School: "New Horizon College", Course: "FullStack Web Development" , Location: "Lagos Nigeria", Sex: "Male"},
    {Name: "Daniel Simon", Age: 22, School: "New Horizon College", Course: "Frontend Web Development" , Location: "Lagos Nigeria", Sex: "Male" },
    {Name: "Philip Oluwa", Age: 21, School: "New Horizon College", Course: "Backend Web Development" , Location: "Lagos Nigeria", Sex: "Male"},
    {Name: "Linda Gutter", Age: 19, School: "New Horizon College", Course: "FullStack Web Development" , Location: "Lagos Nigeria", Sex: "Female"},
    {Name: "Jerome Onyema", Age: 25,School: "New Horizon College", Course: "Frontend Web Development" , Location: "Lagos Nigeria", Sex: "Male"},
    {Name: "Miranda Chaos", Age: 30,School: "New Horizon College", Course: "UI/UX Web Development" , Location: "Lagos Nigeria", Sex: "Female"}
]
for ( let i = 0; i < ClassDetails.length; i++) {
    console.log("Class Details:", "Name:",  ClassDetails[i].Name, " Age:",    ClassDetails[i].Age, " School:", ClassDetails[i].School, " Course:", ClassDetails[i].Course, " Address:", ClassDetails[i].Location, " Gender:", ClassDetails[i].Sex)

}



