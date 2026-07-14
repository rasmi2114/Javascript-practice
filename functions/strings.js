// string methods

//string length property : to find the length of the string
// length will start with 1 and not 0 because it will count the number of characters in the string
    // let str = "Hello, World!";
    // console.log(str.length);

//single quotes and double quotes and backslash are used to define a string in javascript
    // let str1 = 'Hello, World!';
    // let str2 = "Hello, World!";
    // let str3 = `Hello, World!`;
    // console.log(str1);
    // console.log(str2);
    // console.log(str3);

// escape character : to use special characters in the string
    // let str = "Hello, \"World!\" I'm learning 'JavaScript'.";
    // console.log(str);


//string searching methods. it returns the index of the first occurrence of the specified value in a string.
// indexOf will be case sensitive, it will return -1 if the value is not found
    // let str = "Hello, World!";
    // console.log(str.indexOf("World"));
    // console.log(str.lastIndexOf("World"));
    // console.log(str.search("World"));

//strArray() method : to convert a string into an array
    //     let str = "Hello, World!";
    //     let strArr = Array.from(str);
    //     //console.log(strArr);
    //    let strArr1 = strArr.map((curElem, index) => 
    //     `${curElem} - ${index}`);
    //    console.log(strArr1);

// lastIndexOf() method : to find the index of the last occurrence of the specified value in a string
        //    let str1 = "Hello, World! Hello, World!";
        //     let index =str1.indexOf("World");
        //     let index =str1.indexOf("World", 10); // it will search for the first occurrence of the specified value in a string from the specified index
        //     console.log(index);
        //    //let str2 = str1.lastIndexOf("World");
        //     let str2 = str1.lastIndexOf("World", 10); // it will search for the last occurrence of the specified value in a string from the specified index
        //    //console.log(str2);
  

//search() method : to search for a specified value in a string and return the position of the match
        // let str = "Hello, World!";
        // let index = str.search("World");
        // let index = str.search(/world/i);   //i flag is used to perform a case-insensitive search
        // console.log(index); // it will return the index of the first occurrence of the specified value in a string, if not found it will return -1