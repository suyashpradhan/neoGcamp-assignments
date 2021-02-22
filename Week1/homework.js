const numberArray = [2, 6, 3, 8, 5, 10, 9, 7];

//* Calculate Odd & Even Number Function
const oddNumberFunc = (n) => n % 2 === 1;
const evenNumberFunc = (n) => n % 2 === 0;

//* Calculate Sum of Elements inside array
const sumOfElements = (prevValue, currValue) => prevValue + currValue;

//! Find the sum of all odd numbers
let sumOfNumbers = numberArray.filter(oddNumberFunc).reduce(sumOfElements);
console.log(sumOfNumbers);

//! Find the sum of all numbers at odd indices
let sumOfOddIndices = numberArray.filter((item, index) => {
  if (oddNumberFunc(index)) {
    return item;
  }
});
console.log(sumOfOddIndices.reduce(sumOfElements));

//! Find the biggest number in the array.
let sortedArray = Math.max(...numberArray);
console.log(sortedArray);
