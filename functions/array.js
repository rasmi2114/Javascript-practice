 //Array Traversal / Iterating Over Arrays
//? 1: for of loop , also known as iterable

let fruits =["apple", "banana", "mango", "grapes", "kiwi"];
// for (let items of fruits) {
//     console.log(items);
// }

//to display the index no of items in the array
for (let item in fruits) {
    console.log(item);
}

// for(let item = 0; item < fruits.length; item++) {
//     console.log(fruits[item]);
// }