const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(array) {
    let sumTotal = 0
    array.forEach((num) => {
      sumTotal += num;
    });
    return sumTotal;
};

const multiply = function(array) {
    let product = 1;
    array.forEach((number) => {
        product *= number;
    });

    return product;
};

const power = function(x, y) {
    return Math.pow(x, y);
};

const factorial = function(x) {
    let facTotal = 1;
    for (i = x; i > 0; i--) {
        facTotal *= i;
    }
    return facTotal;
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
