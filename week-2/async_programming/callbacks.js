/**
 * ! Write a function `strLength()` which takes
 * * 1. Your name
 * * 2. A function which it will call with the length of your name
 */

const strLength = (name, myCallback) => {
  console.log("hello my name is " + name);
  myCallback(name);
};

const calculateLength = (name) => console.log(`word count is ${name.length}`);

strLength("suyash pradhan", calculateLength);

/**
 * ! Write a function willThanosKillMe() . This function  will take three parameters
 * * 1. Your name
 * * 2. Function to call if Thanos doesn't kill you.
 * * 3. Function to call if Thanos does kill you.
 */

const willThanosKillMe = (name, successCallBack, failureCallBack) => {
  name.length % 2 === 0 ? successCallBack() : failureCallBack();
};

const successCallBack = () => console.log("I'm alive");
const failureCallBack = () => console.log("I'm dead");

willThanosKillMe("Suyash", successCallBack, failureCallBack);
