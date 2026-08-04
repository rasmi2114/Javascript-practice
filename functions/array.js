 //Array Traversal / Iterating Over Arrays


 //* Destructuring Arrays: Es6 feature
// Destructuring is a JavaScript expression that makes it possible
// to unpack values from arrays, or properties from objects, into distinct variables.
// That is, we can extract data from arrays and objects and assign them to variables.

//? 1: Extracting specific elements:

    // const numbers = [10, 20, 30];
    //const first = numbers[0]; // Traditional way
    // const [first, second, third] = numbers; // Destructuring way
    // console.log(second);

//? 2: Ignoring elements:

    // const [, , third] = numbers;
    // console.log(third);


//1: for of loop , also known as iterable : to display the items in the array
//2 : for in loop : to display the index no of items in the array

    //let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // for (let items of fruits) {
    // console.log(items);
    // }

//to display the index no of items in the array
    // let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // for (let item in fruits) {
    // console.log(item);
    // }

// not usefule in this case because it will display the index no of items in the array not the items itself
    // let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // for(let item = 0; item < fruits.length; item++) {
    //  console.log(fruits[item]);
    // }

//forEach() method : to display the items in the array
    //let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // fruits.forEach((curElem, index, array) => {
    //console.log(`${curElem} ${index}`);
    //console.log(array);
    // });


// map() method : to display the items in the array

    //let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // const myMapFruits =fruits.map ((curElem, index, array) => {
    //     return (`${curElem} ${index}`);
    // });
    //console.log(myMapFruits);

// const flattenedArray = nestedArray1.flat(3);
// console.log(flattenedArray);

//? flatMap() is a new Array instance method that combines flat() with map(). It's useful when calling a function that returns an array
// in the map() callback, but you want your resulted array to be flat:

    //const arr = ["My name", "is vinod", "thapa"];

    //const newArr = arr.flatMap((curVal) => curVal. split(" "));
    //const newArr = arr.map((curVal) => curVal. split(" "));

    //console.log(newArr);


//push() method : to add an item in the array
    //let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    //console.log(fruits.push("papaya"));
    //console.log(fruits);

//pop() method : to remove an item from the array
    // let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // console.log(fruits.pop());
    // console.log(fruits);


//shift() method : to remove an item from the beginning of the array
    // let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // console.log(fruits.shift("cherry"));
    // console.log(fruits);

//shift() method : to add an item from the beginning of the array
    //let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // console.log(fruits.unshift("cherry"));
    // console.log(fruits);  

// splice() method : to add an item in the array at a specific index no
    // let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // fruits.splice(2, 0, "cherry");
    // console.log(fruits);


//indexOf() method : to find the index no of an item in the array
    //const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
    // console.log(number.indexOf(5));
    // console.log(number.indexOf(4, 1 )); //if the item is not found in the array it will return -1
    // const result = number.lastIndexOf(4);
    // console.log(result);

//includes() method : to check if an item is present in the array or not
    // it will return true if the item is present in the array otherwise it will return false
    // const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
    // const result = number.includes(4);
    // console.log(result); //true

//find() method : to find the first item in the array that satisfies the condition
        //const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
        // const result1 = number.find((curElem) => {
        // return curElem > 5;
        // });
        // console.log(result1); 

//indexOf() method : to find the index no of the first item in the array that satisfies the condition
        // const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
        // const result2 = number.findIndex((curElem) => {
        // return curElem > 8;
        // });
        // console.log(result2);


//filter() method : to find all the items in the array that satisfies the condition
    // const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
    // const result3 = number.filter((curElem) => {
    //     return curElem > 5;
    // });
    // console.log(result3); // [6, 7, 8, 9, 10]
    

//UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
        // let value = 6;
        // const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];  
        // let updatecart = numbers.filter((curElem) => {
        //     return curElem !== value;
        // });
        // console.log(updatecart); // [1, 2, 3, 4, 5, 7, 8, 9]

// sort() method : to sort the items in the array
    // let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // fruits.sort();
    // console.log(fruits); // [ 'apple', 'banana', 'grapes', 'kiwi', 'mango', 'orange' ]   


// compare() method : to sort the items in the array in ascending or descending order
        // number = [1, 2, 3, 2, 4, 5, 6, 7, 8, 6, 9, 10];
        // //ascending order or default order
        // number.sort((a, b) => {
        //     if (a < b) {
        //         return 1;   //return -1
        //     }
        //     if (a > b) {
        //         return -1;  // return 1
        //     }
        //     return 0;
        // });
        // console.log(number); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        

// reduce() method : to reduce the items in the array to a single value
        // const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
        // const result4 = number.reduce((accumulator, curElem) => {        
        //     return accumulator + curElem;
        // });
        // console.log(result4); // 63    

  //copying of array
    // let fruits =["apple", "banana", "mango", "grapes", "kiwi", "orange"];
    // let newFruits = [...fruits];
    // console.log(newFruits); 

//concatenating arrays

    // const number1 = [1,2,3,3,4,5];
    // const number2 = [7,5,9,8,8,5];

    // const newNumbers =[...number1, ...number2];
    // console.log(newNumbers);  // concatenating and display all the nimbers
    
//* ========================================
//* Array.flat & Array.flatMap
//* ========================================

//? flat() is a new array instance method that can create a one-dimensional
// array from a multidimensional array. (nested arrays into a single, flat
// array.)

        // const nestedArray = [1, 2, [3, 4], 5];

        // const nestedArray1 = [1, [2, [3, 4]], 5];

        // const flattenedArray = nestedArray.flat();

        // const flattenedArray = nestedArray1.flat(2);

        // console.log(flattenedArray);

//******.at() method 
// array ya string me kisi specific index ki value lene ke liye use hota hai.
//you can use it in string, array, all typed array clasees 

        // const fruits = ["Apple", "Banana", "Mango", "Orange"];

        //     console.log(fruits.at(0));
        //     console.log(fruits.at(2));

        //     console.log(fruits.at(-1));

 //* ============================================
//* Array.findLast() & Array.findLastIndex()
//* ============================================

//? This function will allow us to find element from the
// last to first of the array based on a condition.

    // const array = [1, 2, 3, 4, 5, 6, 4];

    // console.log(array.findLast((elem) => elem));

    // console.log(array.findLastIndex((elem) => elem));    
    
//**********Array.prototype.toReversed(); 

    //const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];
    // const reversedNum = myNames.toReversed();

    // console.log("original", myNames);
    // console.log("reversed", reversedNum);


//*********Array.prototype.toSorted(compareFn);

        // const sortedArr = myNames.toSorted();

        // console.log("original", myNames);

        // console.log("sorted", sortedArr);   