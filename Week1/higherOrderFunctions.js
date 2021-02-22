//*Higher Order Functions

//!Write a function which can tell whether a number is less than 10 or not. Supply this function to Array.filter() to get an array with no 10s in it.

const checkNumber = (number) => number < 10;
let newArr = [22, 10, 45, 9, 7, 4, 10, 2].filter(checkNumber);
console.log(newArr);

//! Given an array of numbers return an object for each item. Given an array of numbers calculate the sum

let numbersArr = [4, 8, 2];

const numberArray = (num) => {
  return { item: num };
};

//? Map
let mapArray = numbersArr.map(numberArray);
console.log(mapArray);

//? Reduce
let reduceFunction = (acc, total) => acc + total;
let totalArr = numbersArr.reduce(reduceFunction);
console.log(totalArr);
