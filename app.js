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


/* Write a function called doubleAndReturnArgs which accepts an array and a 
variable number of arguments. The function should return a new array with 
the original array values and all of additional arguments doubled. */
const doubleAndReturnArgs = (numArray, ...nums) => [...numArray, ...(nums.map((num) => num * 2))];


/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
    const r = Math.floor(Math.random() * items.length);
    return [...items.slice(0,r), ...items.slice(r+1)];
}


/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}
}


/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}