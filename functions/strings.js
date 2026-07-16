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


//match() method : to search for a specified value in a string and return the matches as an array
        //let str = "Hello, World! Hello, World!";
        // let matches1 = str.match("world"); // it will return an array of the first match found in the string, if not found it will return null
        // console.log(matches1); // it will return an array of the first match found in the string, if not found it will return null
          
        // let matches1 = str.match("world" i); //i flag is used to perform a case-insensitive search
        // console.log(matches1); // it will return an array of the first match found in the string, if not found it will return null
        
        // let matches = str.match(/World/g); //g flag is used to perform a global search
        // console.log(matches); // it will return an array of all the matches found in the string, if not found it will return null    
        
        // let matches2 = str.matchAll("World"); 
        // console.log(...matches2); // it will return an iterator of all the matches found in the string, if not found it will return null

//includes() method : to check if a string contains a specified value
        // let str = "Hello, World!";
        // let result = str.includes("lo");
        // console.log(result); // it will return true if the string contains the specified value, otherwise it will return false
        
//startsWith() method : to check if a string starts with a specified value
        //let str = "Hello, World!";
        //let result = str.startsWith("Hello");
        //console.log(result); // it will return true if the string starts with the specified value, otherwise it will return false    
        
        //let result = str.startsWith("Hello", 7); // it will check if the string starts with the specified value from the specified index
        // console.log(result); // it will return true if the string starts with the specified value from the specified index, otherwise it will return false

//endsWith() method : to check if a string ends with a specified value
        // let str = "Hello, World!";
        // let result = str.endsWith("World!");
        // console.log(result); // it will return true if the string ends with the specified value, otherwise it will return false          


//extracting string parts
    //slice() method : to extract a part of a string and return it as a new string.
    // count the position from 0
        // let str = "Hello, World!";
        // let result = str.slice(7); // start index no
        // let result = str.slice(7, 10); // it will extract the part of the string from index 7 to index 12 (not including index 12)
        // console.log(result); 
       


//substring() is similar to slice(). The differnce is that start and end values less then 0 are treated as 0 in susstring().
        // let text = "Hello javaScript, welcome to oure course";
        // //let result = text.substring(6);
        //  let result = text.substring(-2);
        //  console.log(result);


sub

