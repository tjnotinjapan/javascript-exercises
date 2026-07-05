const leapYears = function(year) {
    // Set conditions to determine if inputted year is a leap year
    // Condition one: divisible by 4 = leap year
    // Condition two: divisible by 100 != leap year unless also divisble by 400

    // Condition one
    if (year % 4 == 0) {
        // Return true if non-century year passed condition one
        if (year % 100 > 0) {
            return true;
        }
        // Condition two
        if (year % 100 == 0 && year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
