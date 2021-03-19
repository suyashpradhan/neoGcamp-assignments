const increment = (num) => {
  return num + 1;
};

const square = (num) => {
  return num * num;
};

const compose = (...rest) => {
  return (num) => {
    return rest.reduce((accumulator, currentValue) => {
      console.log(accumulator, currentValue);
      return currentValue(accumulator);
    }, num);
  };
};

const fnc = compose(increment, square, square);
console.log(fnc(2));
