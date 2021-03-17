const fruits = ["banana", "orange", "mango"];

// ! Write a function addFruit() which would take the fruits array and a fruitName. Return a new array with fruit added to it. Write a function addFruit() which would take the fruits array and a fruitName. Return a new array with fruit added to it.

const addFruit = (fruitsArr, fruitName) => {
  return [...fruitsArr, fruitName];
};
console.log(addFruit(fruits, "apple"));

// ! Write a function addFruitAtStart() . This would take a fruit and add it at the beginning of the array.

const addFruitAtStart = (fruitsArr, fruitName) => {
  return [fruitName, ...fruitsArr];
};
console.log(addFruitAtStart(fruits, "pineapple"));

// !Write a function `replaceFruit()` which takes the fruits array and a fruitName. Return a new array with that fruit replaced with the new fruitName.

const filteredFruit = (fruitsArr, fruitName) => {
  return fruitsArr.filter((fruit) => {
    if (fruit !== fruitName) {
      return fruit;
    }
  });
};
console.log(filteredFruit(fruits, "orange"));

// ! Write a function changeFruitByIndex() which takes the fruits array, fruitName, and an index. At this index, the current fruit is replaced by the new fruitName.

const changeFruitByIndex = (fruitsArr, fruitName, index) =>
  fruitsArr.map((fruit, idx) => (idx === index ? fruitName : fruit));
console.log(changeFruitByIndex(fruits, "cherry", 1));

// ! You can use slice() and rest operator for this. Write a function insertFruitAtIndex() which takes the fruits array, fruitName, and an index. At this index, add the new fruitName and shift every other fruit by one.

const insertFruitAtIndex = (fruitsArr, fruitName, index) => {
  return [...fruitsArr.slice(0, index), fruitName, ...fruitsArr.slice(index)];
};

console.log(insertFruitAtIndex(fruits, "cherry", 1));
