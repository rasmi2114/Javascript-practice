 //Array Traversal / Iterating Over Arrays
//1: for of loop , also known as iterable : to display the items in the array
//2 : for in loop : to display the index no of items in the array

let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
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
// fruits.forEach((curElem, index, array) => {
//     //console.log(`${curElem} ${index}`);
//     console.log(array);
// });


// map() method : to display the items in the array

// const myMapFruits =fruits.map ((curElem, index, array) => {
//     return (`${curElem} ${index}`);
// });

//    console.log(myMapFruits);


//push() method : to add an item in the array

//console.log(fruits.push("papaya"));
//console.log(fruits);

//pop() method : to remove an item from the array

//    console.log(fruits.pop());
//    console.log(fruits);

//shift() method : to remove an item from the beginning of the array
//    console.log(fruits.shift("cherry"));
//    console.log(fruits);

//shift() method : to add an item from the beginning of the array
//    console.log(fruits.unshift("cherry"));
//    console.log(fruits);  

// splice() method : to add an item in the array at a specific index no
    // fruits.splice(2, 0, "cherry");
    // console.log(fruits);


    //indexOf() method : to find the index no of an item in the array
    const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
    // console.log(number.indexOf(5));
    // console.log(number.indexOf(4, 1 )); //if the item is not found in the array it will return -1
     const result = number.lastIndexOf(4);
    console.log(result);