const palindromes = function (phrase) {
    // Replace any breaks and punctuation
    let replacedPhrase = phrase.replaceAll(" ", "");
    replacedPhrase = replacedPhrase.replaceAll(".", "");
    replacedPhrase = replacedPhrase.replaceAll(",", "");
    replacedPhrase = replacedPhrase.replaceAll("!", "");

    // Change phrase to upper case
    replacedPhrase = replacedPhrase.toUpperCase();

    // Compare left and right side of phrase working in to centerpoint
    // begin left [0] and increment to equal/less than half of string length
    // begin right [string length - 1] and reduce until equal/greater than half string length
    const rightSide = replacedPhrase.length - 1;
    for (i = 0; i < (replacedPhrase.length / 2); i++) {
        if (replacedPhrase[i] == replacedPhrase[rightSide - i]) {
            // Do nothing
        } else {
            return false;
        }
    }
    // Return true if passes above loop check
    return true;

};

// Do not edit below this line
module.exports = palindromes;
