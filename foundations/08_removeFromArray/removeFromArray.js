const removeFromArray = function(array) {

    let outputArray = array;
    
    // Find number of arguments other than the array (arg 0)
    const numberOfArgumentsToCheck = arguments.length - 1;

    // Check if the argument values besides array present (arg 1+)
    for (i = 1; i < arguments.length; i++) {
        
        // Assign current argument to check for
        let argToCheck = arguments[i];

        // Check each item in the array starting with index 0
        for (j = 0; j < outputArray.length; j++) {
            let currentIndex = j;
            let arrayValue = outputArray[j];

            // If array and argument values and types match, remove from arrray
            if (arrayValue == argToCheck && typeof arrayValue == typeof argToCheck) {
                outputArray.splice(currentIndex, 1);
                // Reset j value to zero (-1 + j++)
                j = -1;
            }
        }
    }
    
    // Return final array output
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
