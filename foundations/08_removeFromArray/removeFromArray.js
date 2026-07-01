const removeFromArray = function(array, remove1, remove2) {

    // Find number of arguments
    const numberOfArgumentsToCheck = arguments.length - 1;

    if (numberOfArgumentsToCheck > 0) {

        // Check if each argument is present in the array
        for (i = 1; i < numberOfArgumentsToCheck + 1; i++) {
            let arg = arguments[i];

            // Find out how many times the argument is in the array
            let count = 0;
            let checkArg = "";
            for (i = 0; i < array.length; i++) {
                checkArg = array[i];

                if (checkArg === arg) {
                    count += 1;
                }
            }

            // Remove each occurance of argument in the array
            array.splice(arg, count);
        }
    }

    /*

    const itemToRemove = array.indexOf(remove1);
    
    // Find out how many items in the array match remove1
    let count1 = 0;
    for (i = 0; i < array.length; i++) {
        let arrayCheck = array[i];

        if (arrayCheck === remove1) {
            count1 += 1;
        }
    }

    // Remove all of remove1 occurances
    array.splice(itemToRemove, count1);

    // If a second argument, repeat above
    if (remove2) {
        let count2 = 0;

        for (i = 0; i < array.length; i++) {
            let arrayCheck2 = array[i]

            if (arrayCheck2 === remove2) {
                count2 += 1;
            }
        }

        const itemToRemove2 = array.indexOf(remove2);
        array.splice(itemToRemove2, count2);
    }
    */

    // Return final array
    return array;
    

};

// Do not edit below this line
module.exports = removeFromArray;
