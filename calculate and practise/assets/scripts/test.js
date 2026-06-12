//console.log(Math.random()); // This will generate a random number between 0 and 1, not between 1 and 100. To generate a random number between 1 and 100, you can use the following code:
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(25, 100)); // This will generate a random integer between 25 and 100 (inclusive).