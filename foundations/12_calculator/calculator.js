const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(array) {
    let sum = 0
    array.forEach((num) => {
      sum += num;
    });
    return sum;
};

const multiply = function(array) {
    let sum = 1;
    array.forEach((number) => {
        sum *= number;
    });

    return sum;
};

const power = function(x, y) {
    return Math.pow(x, y);
};

const factorial = function(x) {
    let sum = 1;
    for (i = x; i > 0; i--) {
        sum = sum * i;
    }
    return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
