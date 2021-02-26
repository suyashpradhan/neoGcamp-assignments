const sum = (a) => (b) => (c) => (d) => a + b + c + d;
console.log(sum(4)(5)(6)(7));

const number = (num) => (num2) => num * num2;
console.log(number(10)(5));

//! From FP
const mainFunc = (name) => (greetingFunc) => `${name} says ${greetingFunc}`;
console.log(mainFunc("suyash")("hello!!!"));
