/* Rest/Spread Operator Exercises
Patrick Swafford
Springboard */


/* Refactor the following function such that it uses the rest operator and an arrow function: */
/* function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
} */
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


/* Write a function called findMin that accepts a variable number of arguments and returns the smallest argument: */
const findMin = (...nums) => nums.reduce((min, num) => min <= num ? min : num);


/* Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object. */
const mergeObjects = (o1, o2) => ({...o1, ...o2});