const removeFromArray = function(array, ...args) {
    const outputArray = [];

    // Remove any args found in the array by pushing non-matching args into outputArray
    array.forEach((value) => {
        if (!args.includes(value)) {
            outputArray.push(value);
        }
    });

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
