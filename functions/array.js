 //Array Traversal / Iterating Over Arrays
//1: for of loop , also known as iterable : to display the items in the array
//2 : for in loop : to display the index no of items in the array

let fruits =["apple", "banana", "mango", "grapes", "kiwi"];
// for (let items of fruits) {
//     console.log(items);
// }

//to display the index no of items in the array
// for (let item in fruits) {
//     console.log(item);
// }

// not usefule in this case because it will display the index no of items in the array not the items itself

// for(let item = 0; item < fruits.length; item++) {
//     console.log(fruits[item]);
// }

//forEach() method : to display the items in the array
fruits.forEach((curElem, index, array) => {
    console.log(`${curElem} ${index}`);
});