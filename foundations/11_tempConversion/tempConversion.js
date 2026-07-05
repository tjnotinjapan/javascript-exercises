const convertToCelsius = function(temp) {
    // F to C -> (F - 32) x 5/9 = C
    // Round converted temp x 10 then divide by 10 to get decimal
    return Math.round(((temp - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
    // C to F -> (c x 9/5) + 32 = F
    // Round converted temp x 10 then divide by 10 to get decimal
    return Math.round(((temp * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
