const sum = (a) => (b) => (c) => (d) => a + b + c + d;
console.log(sum(4)(5)(6)(7));

const number = (num) => (num2) => num * num2;
const firstNumber = number(5);
console.log(firstNumber(10));

//! From FP
const mainFunc = (name) => (greetingFunc) => `${name} says ${greetingFunc}`;
console.log(mainFunc("suyash")("hello!!!"));

const usersInfo = [
  {
    name: "John Doe",
    age: 24,
    email: "john@doe.com",
  },
  {
    name: "Jane Doe",
    age: 26,
    email: "jane@doe.com",
  },
];

const mapKeyWithObject = (key) => (object) => object[key];

const getByName = mapKeyWithObject("name");
const mappedUsersByName = usersInfo.map(getByName);
console.log(mappedUsersByName);
