const fibonacci = function(number) {
    // Use inputted number to find value of corresponding member
    // of the Fibonacci sequence (each member sum of previous two numbers)
    let fibFirstNumber = 1;
    let fibSecondNumber = 1;

    // Check inputs (negative = 'OOPS') are positive integers
    // Return first number, second number, or combo of first two
    // numbers for inputs of 1-3
    // else add together previous two numbers at nth place in sequence
    if (number < 0) {
        return 'OOPS';
    }  else if (number == 0) {
        return 0;
    } else if (number == 1) {
        return fibFirstNumber;
    } else if (number == 2) {
        return fibSecondNumber;
    } else if (number == 3) {
        return (fibFirstNumber + fibSecondNumber);
    } else {
    
        for (i = 0; i < (number - 3); i++) {
            // Copy original value of first fib number
            // Assign second number to first fib, then add together second
            // And original first fib number
            let fibPlaceHolder = fibFirstNumber;
            fibFirstNumber = fibSecondNumber;
            fibSecondNumber = fibSecondNumber + fibPlaceHolder;
        }

        return (fibFirstNumber + fibSecondNumber);
    }

    
};

// Do not edit below this line
module.exports = fibonacci;
