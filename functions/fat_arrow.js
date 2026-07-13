// const sum = (a, b) => {
//     let result = `The sum of ${a} and ${b} is ${a + b}`;
//     console.log(result);
// };

// sum(6, 10);

// const sum = (a, b) => console.log( `The sum of ${a} and ${b} is ${a + b}.`);
// sum(6, 10);

// //Resversed a string
// const isreverse = (str) => {
//     let reverse = "";
//     for (let char = str.length - 1; char >= 0; char--) {
//         reverse = reverse + str[char];
//     }
//    return reverse;
// };

// console.log(isreverse("Rashmi Alok"));

//Palindrome
const isPalindrome = (str) => {
    let reverse = "";
    for (let char = str.length - 1; char >= 0; char--) {
        reverse = reverse + str[char];
    }
    return str === reverse ? true : false;
    // if (str === reverse) {
    //     return console.log(`${str} is a palindrome`);
    // }else {
    //     return console.log(`${str} is not a palindrome`);   
    // }

    };

   console.log(isPalindrome("level"));