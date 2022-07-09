const reverseString = function(string) {
    let i = string.length
    let output = ''
    for (; i >= 0; i--) {
        output += string.charAt(i)
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
