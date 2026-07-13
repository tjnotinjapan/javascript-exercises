const leapYears = function(year) {
    // Set conditions to determine if inputted year is a leap year
    // Return false if a year does not meet any of the conditions
    const divisbleByFour = year % 4 == 0;
    const notCenturyYear = year % 100 > 0;
    const divisbleByHundredAndFourHundred = year % 100 == 0 && year % 400 == 0;

    if (divisbleByFour) {
        if (notCenturyYear) {
            return true;
        }
        if (divisbleByHundredAndFourHundred) {
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
