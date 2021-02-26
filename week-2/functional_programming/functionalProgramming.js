//! Take an object, with your mother name and your age. Now create an obj for by your sibling by age difference

let dataObj = {
  motherName: "Gayatri",
  myAge: 24,
};

let siblingData = {
  ...dataObj,
  siblingAge: 24 - 2,
};

console.log(siblingData);

//! Take an array with 5 colors. Create another array by adding too more color to it

let colorsArr = ["red", "blue", "green", "yellow", "black"];
let copiedArr = ["cyan", "pink", ...colorsArr];

console.log(copiedArr);

//! Write a function birthday to take a person's name and age in an object and increase age
