/**
 * ! Write a function `strLength()` which takes
 * * 1. Your name
 * * 2. A function which it will call with the length of your name
 */

const calcLength = (name) => name.length;
const strLength = (name, calcLength) => calcLength(name);

console.log(strLength("Suyash"));
