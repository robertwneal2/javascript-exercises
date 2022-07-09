const caesar = function(str, shiftVal) {
    const alphaU = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabetU = alphaU.map((x) => String.fromCharCode(x));
    const alphaL = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabetL = alphaL.map((x) => String.fromCharCode(x));
    let array = str.split('')
    let oldIndex = 0
    let newIndex = 0
    let i = 0
    let length = array.length
    let currentVal = ''

    for (; i < length; i++) {
        currentVal = array[i]
        if (alphabetU.includes(currentVal)) {
            oldIndex = alphabetU.indexOf(currentVal)
            newIndex = (oldIndex + shiftVal) % 26
            if (newIndex < 0) {
                newIndex += 26
            }
            newVal = alphabetU[newIndex]
            array[i] = newVal
        } else if (alphabetL.includes(currentVal)){
            oldIndex = alphabetL.indexOf(currentVal)
            newIndex = (oldIndex + shiftVal) % 26
            if (newIndex < 0) {
                newIndex += 26
            }
            newVal = alphabetL[newIndex]
            array[i] = newVal
        }  
    }
    return array.join('')
};

// Do not edit below this line
module.exports = caesar;
