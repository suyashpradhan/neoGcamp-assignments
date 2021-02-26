const numberArray = [2, 6, 3, 8, 5, 10, 9, 7];

//* Calculate Odd & Even Number Function
const oddNumberFunc = (n) => n % 2 === 1;
const evenNumberFunc = (n) => n % 2 === 0;
const divisibleByTen = (n) => n % 10 === 0;

//* Calculate Sum of Elements inside array
const sumOfElements = (prevValue, currValue) => prevValue + currValue;

//! Find the sum of all odd numbers
const sumOfNumbers = numberArray.filter(oddNumberFunc).reduce(sumOfElements);
console.log(sumOfNumbers);

//! Find the sum of all numbers at odd indices
const sumOfOddIndices = numberArray.filter((item, index) => {
  if (oddNumberFunc(index)) {
    return item;
  }
});
console.log(sumOfOddIndices.reduce(sumOfElements));

//! Find the biggest number in the array.
const sortedArray = Math.max(...numberArray);
console.log(sortedArray);

//! Find the numbers divisible by 10
const divisiblityTest = numberArray.filter(divisibleByTen);
console.log(divisiblityTest);

//! Return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one
let oddNumberArray = numberArray
  .filter(oddNumberFunc)
  .map((singleItem) => singleItem + 1);

let evenNumberArray = numberArray
  .filter(evenNumberFunc)
  .map((singleItem) => singleItem - 1);

let allArray = [...oddNumberArray, ...evenNumberArray];
console.log(allArray);

//! Return an object with sum of all odd numbers and even numbers separately.
let sumOfOddNumbers = numberArray.filter(oddNumberFunc).reduce(sumOfElements);
console.log({ sumOfOddNumbers });

let sumOfEvenNumbers = numberArray.filter(evenNumberFunc).reduce(sumOfElements);
console.log({ sumOfEvenNumbers });
