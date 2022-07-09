const palindromes = function (str) {
    const lowerStr = str.toLowerCase()//lower case
    const lettersStr = lowerStr.replace(/[^a-z]/g, '')//remove symbols
    let endIndex = lettersStr.length - 1
    let startIndex = 0
    for (startIndex, endIndex; endIndex >= startIndex; startIndex++, endIndex--) {
        if (lettersStr.charAt(startIndex) != lettersStr.charAt(endIndex)) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
