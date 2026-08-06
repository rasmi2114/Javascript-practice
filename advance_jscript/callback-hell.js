//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

   function getUser(callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback();
    }, 1000);
}

function getOrders(callback) {
    setTimeout(() => {
        console.log("Orders fetched");
        callback();
    }, 1000);
}

function getOrderDetails(callback) {
    setTimeout(() => {
        console.log("Order details fetched");
        callback();
    }, 1000);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("Payment successful");
        callback();
    }, 1000);
}

//Problem ye hai ki jaise-jaise callbacks badhte hain, code read, maintain aur error-handle karna difficult ho jata hai.

//Modern JavaScript me isi problem ko solve karne ke liye pehle Promises aur phir async/await use kiya jata hai.