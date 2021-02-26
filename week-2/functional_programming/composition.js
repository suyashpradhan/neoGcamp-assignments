//! Function Composition
const compose = (fn1, fn2) => (value) => fn1(fn2(value));

const double = (num) => num * 2;
const triple = (num) => num * 3;

const composedFunction = compose(double, triple);
console.log(composedFunction(2));

//! Write a function which can log any text with your username. Another function which can write any text with your userID. Now compose both functions to give one function which can log any text with both username & userId

const userName = (name) => `Welcome ${name}`;
const userID = (id) => `User ID is ${id}`;

const userComposedFunction = () => {
  return console.log(userID(2), userName("Suyash"));
};

userComposedFunction();

//! Write a function compose() which will take any number of functions and return a function which will run the given functions in order when called with an arguement.

const composedFunc = (...fns) => (initialValue) =>
  fns.reduce((func1, func2) => func2(func1), initialValue);

const increment = (num) => num + 1;
const square = (num) => num * num;
const incrementThenSquare = composedFunc(increment, square);
console.log(incrementThenSquare(4));
