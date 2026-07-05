const sumAll = function(...args) {

    // Check if inputted arguments are not positive integers
    // return ERROR if so
    for (let number of args) {
        if (number > 0 && Number.isInteger(number)) {
            // Do nothing
        } else {
            return 'ERROR';
        }
    }

    // Assign max and min variables
    const maxValue = Math.max(...args);
    const minValue = Math.min(...args);

    // Sum up all numbers
    let sumTotal = 0;
    for (i = minValue; i < maxValue +1; i++) {
        sumTotal += i;
    }

    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
