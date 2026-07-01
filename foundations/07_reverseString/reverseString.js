const reverseString = function(string) {
    let output = "";
    let stringLength = string.length - 1;

    for (i = 0; i < string.length; i++) {
        output += string[stringLength - i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
