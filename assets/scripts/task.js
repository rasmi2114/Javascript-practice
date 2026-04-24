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