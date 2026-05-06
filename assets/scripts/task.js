// called function inside another function

 function functArg(){
    console.log('Hello');
 }
let name = 'AB';
 function argument(msg, rev){
    //return 'msg' + exp;
    console.log(msg);
    console.log(rev);
    functArg();
}

argument('XY' , name); 

//Create a variable using let and store your city name. 

let cityName = "Vienna";
console.log(cityName);

// Input: Number
// Output: "Display result positive, negative or zero based on the value of age"

function valueGiven(num){
   if ( num > 0){
    return "Positive";
   }
   else if ( num < 0)
   {
    return "Negative";
   }
    else if ( num === 0)
   {
    return "Zero";
   }
}

valueGiven(6);

// Input: name, age 
// Output: "Rashmi is 25 years old"

function myDetails(name, age) { 
    console.log(name + ' is ' + age + ' years old');
}
myDetails('Rashmi', 25);


// Input: num1, num2, operator (+, -, *, /) 
// Output: result

function cal(num1, num2, operator) { 
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

cal(4, 8, '+');

// Input: firstName, lastName
// Output: "Full Name: <firstName> <lastName>"

function fullName(firtname, lastname) {
//return "Full Name: " + fiestname + " " + lastname;
   console.log("Full Name: " + firtname + "  "+ lastname);
}
fullName('Rashmi', 'Singh');


//display full name using const and let
const name = 'rashmi';
namee = 'rashmi singh';
let sum =name;

console.log(name);

// creating a object with my info data (key value pairs) 

let myInfo = {
  name: "Rashmi",
  language: ["hindi", "english", "german"],
  experience: 10,
  isAvailable: true
};

let myInfo1 = {
  name: "Soni",
  city: "Graz",
  profession: "Software Engineer",
  skills: ["JavaScript", "UI/UX"],
  experience: 10
};

//comparing Age 
let userCategory; // should be 'child', 'adult' or 'senior'
let age = 30;

function solve() {
    if (age < 18) {
        userCategory = 'child';
        return;
    }
    if (age < 65) {
        userCategory = 'adult';
        return;
    }
    userCategory = 'senior';
}

//Another if else statement example
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}


//1. Even or Odd Number
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

//Password Check
let password = "12345";

if (password === "admin123") {
    console.log("Login successful");
} else {
    console.log("Wrong password");
}

//Positive or Negative

let num = -5;

if (num > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}