//^ setInterval

/**
 * ! Write a function which takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"
 */

const timerFnc = (num) => num;
let timer = timerFnc(10);

let timerId = setInterval(() => {
  console.log(timer--);
  timer === 0 ? (clearInterval(timerId), console.log("Bang Bang")) : "";
}, 1000);
