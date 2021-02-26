//* Global Array
const stringArray = [
  "apple",
  "orange",
  "mango",
  "papaya",
  "strawberry",
  "guava",
];

//! Find the number of strings with similar number of characters.
const similarLengthWords = (arr) => {
  let obj = {};
  arr.map((item) => {
    let itemLength = obj[item.length];
    if (itemLength) {
      obj[item.length] = itemLength + 1;
    } else {
      obj[item.length] = 1;
    }
  });
  return obj;
};
console.log(similarLengthWords(stringArray));

//! Return an array with strings which have vowels
let vowelsArray = stringArray.filter((vowel) => vowel.match(/[aeiou]/));
console.log(vowelsArray);

//* Calculate Length Function
const calculateLengthFunc = (item) => item.length;

//! Return an array of objects with key as item and value as number of characters in the string .
const characterArray = stringArray.map((item) => {
  return { [item]: calculateLengthFunc(item) };
});
console.log(characterArray);
