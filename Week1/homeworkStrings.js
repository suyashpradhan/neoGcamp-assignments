//* Global Array
const stringArray = ["apple", "orange", "mango", "papaya", "fig"];

//* Calculate Length Function
const calculateLengthFunc = (item) => item.length;

//! Find the number of strings with similar number of characters.
let arrayLength = stringArray.map(calculateLengthFunc);
console.log(arrayLength);

//! Return an array with strings which have vowels
let vowelsArray = stringArray.filter((vowel) => vowel.match(/[aeiou]/));
console.log(vowelsArray);

//! Return an array of objects with key as item and value as number of characters in the string .
const characterArray = stringArray.map((item) => {
  return { [item]: calculateLengthFunc(item) };
});

console.log(characterArray);
