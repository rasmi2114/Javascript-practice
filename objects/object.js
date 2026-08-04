//* ==============================
//* Object in JavaScript
//* ==============================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. 
//In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

    // const product = {
    // id: 1,
    // pName: "laptop",
    // };
    // console.log(product);

  //let person = {
   // name: "Vinod",
   // age: 30,
    //isStudent: false,
    // greet: function () {
    // console.log(person);
    // },
  // };

// let person = {
//   name: "Vinod",
//   age: 30,
//   "is'Student": false,
//   greet: function () {
//     console.log("Welcome to World Best JavaScript Course");
//   },
// };
// person.greet() 

//* ==============================
//* Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:

// console.log(person.age);
// console.log(person.name);
// console.log(person[`is'Student`]);

//* =================================
//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:
  // person["job"] = "web dev";
  // person.age = 18;
  // person["age"] = 20;

  // console.log(person);

//* =================================
//* Methods:
//* =================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

// person.greet();

//* ========================================
//* We can add dynamic keys in an object
//* ========================================

  // let idType = "studentId";

  // let student = {
  //   [idType]: "A123456", // Dynamic key based on idType
  //   sName: "Vinod",
  //   sAge: 29,
  //   isStudent: true,
  //   greet: function () {
  //     console.log(
  //       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
  //     );
  //   },
  // };

  //  student.greet();

//? useCase: when we want to get the user name and value in react

//* =================================
//* Data Modeling:
//* =================================
//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

  // let car = {
  //   brand: "Toyota",
  //   model: "Camry",
  //   year: 2022,
  //   start: function () {
  //     console.log("Engine started!");
  //   },
  // };
  //    console.log(car);
  //   car.start();
 
//* =====================================
//*  Interview Question
//* ======================================

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

  //  let x = 10;
  //  const modify = (x) => (x = 20);
  //  console.log(x);
  //  console.log(modify());

//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

  //  let obj ={ id: 5, name: "rashmi"};
  //  let obj1 = obj;
  //  obj1.name ="rani";
  //  console.log(obj1);
  //  console.log("original", obj);

//? Object.assign() is used to copy properties from one or more source objects to a target object.
    
    // let obj ={ id: 5, name: "rashmi"};
    // let newObj = Object.assign({}, obj);

    // newObj.name = "rani";

    // console.log(newObj);
    // console.log("original", obj);
  
//* =====================================
//* Comparison by Reference:
//* ======================================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

  // const obj1 = { name: "rashmi"};
  // const obj2 = { name: "rani"};
  // const obj3 = obj1;

  // const isEqual = obj1 === obj2 ? true : false ;
  // const isEqual = obj1 === obj3 ? true : false ;

  // console.log(isEqual);

//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================

//?JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.

  // let student = {
  //   id: 1,
  //   sName: "Vinod",
  //   sAge: 29,
  //   isStudent: false,
  //   greet: function () {
  //     console.log(
  //       `hey my id is ${student.identity} & my name is ${student.sName}`
  //     );
  //   },
  // };

  // let jsonData = JSON.stringify(student);
  // console.log(jsonData);
  // let parsedObject = JSON.parse(jsonData);
  // console.log(parsedObject);

//* =====================================
//* "this" Object
//* ======================================

//? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.
// ("use strict");

// x = 5;
// console.log(x);

  // function callme() {
  //   console.log(this);
  // }

  // callme(); // try to run on browser console

//todo  Let's check the this keyword values in an object methods

//* Regular Function Expression:
    // const obj = {
    //   name: "Kodyfier",
    //   greet: function () {
    //     console.log(this);
    //   },
    // };

    // obj.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
    // const obj = {
    //   name: "Kodyfier",
    //   greet() {
    //     console.log(this);
    //   },
    // };

    // obj.greet();

//* Fat Arrow Function
  // const obj = {
  //   name: "thapa technical",
  //   greet: () => {
  //     console.log(this);
  //   },
  // };

  // obj.greet();

//* =====================================
//* Objects Useful Methods
//* ======================================

  // const product = {
  //   id: 1,
  //   name: "Laptop",
  //   category: "Computers",
  //   brand: "ExampleBrand",
  //   price: 999.99,
  //   stock: 50,
  //   description:
  //     "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
  //   image: "image link will be added during projects",
  // };

//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

    // let keys = Object.keys(product);
    // console.log(keys);

//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.

    // let keys = Object.values(product);
    // console.log(keys);

//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.

      // let keys = Object.entries(product);
      // console.log(keys);
//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
      // console.log(product.hasOwnProperty ("name"));
      // console.log(product.hasOwnProperty ("class"));
      
//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.

      //  const target = { a: 1, b: 5};
      //  const source = { b: 3, c: 9};
      //  const mergedObject = Object.assign(target, source);
      //  console.log(mergedObject);

//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.

    // Object.freeze(product);
    // product.id = "190";
    // console.log(product);

// if key and value are same then we can use Es6 shorthand propetry  
      // const person ={ name: name, age:age};
      // const person ={name,age}; //shorthand propetry 
      // console.log(person);


//* String padding

//? String padding in JavaScript is a way to add extra characters (or
// spaces) to a string to make it a specific length.

//todo Use Case: Makes formatting text easier and more predictable,
// especially for tables, alignments, and UI elements. No more messy,
// lines disrupting your visual spells!

//? Using padStart() to pad from the beginning:

  // const name = "Kodyfier";
  // const paddedName = name.padStart(10);
  // console.log(paddedName);
  // console.log(paddedName.length); // Output: 15

  // const name = "Rodyfier";
  // const paddedName1 = name.padEnd(10, "*");
  // console.log(paddedName1);
  // console.log(paddedName1.length); // Output: 15

  //***** trimStart() and trimEnd()*/

  // removed white space from the start/end  of the
  // original string

      // console.log("Testing".trimStart());
      // console.log("          Testing".trimStart());
      // console.log("     Testing     ".trimStart());

      // console.log("Testing".trimEnd());
      // console.log("          Testing".trimEnd());
      // console.log("     Testing     ".trimEnd());

      // let str = "......thapa     ";
      // console.log(str.trim().length);

  //* trailing commas
//* ==============================

//? This feature allows to have trailing commas in function declarations,
// function calls, array literal & object literal:

// Function parameter list
    // function greet(name, age,) {
    //   console.log(`Hello ${name}, you are ${age} years old.`);
    // }

// Function call
  //greet("John", 30,);

  // Rest Operator usees 

    // const student = {
    //     name: "Rashmi",
    //     age: 30,
    //     city: "Graz",
    //     isStudent: true
    // };

      // const { age, ...others } = student;  // REST → remaining values ko COLLECT karta hai
      // const newStudent = { ...student };  // SPREAD → existing values ko SPREAD/COPY karta hai
      // const newStudent = {...student, country: "Austria"};  // addind extra new property

      //console.log(newStudent);
      //console.log(age);
      //console.log(newStudent);