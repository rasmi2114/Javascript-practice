 //Array Traversal / Iterating Over Arrays
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
        const number =[1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 4, 10];
        const result4 = number.reduce((accumulator, curElem) => {        
            return accumulator + curElem;
        });
        console.log(result4); // 63    