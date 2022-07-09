const sumAll = function(int1, int2) {
    if (int1 < 0 || typeof(int1) != 'number') {
        return "ERROR"
    }
    if (int2 < 0 || typeof(int2) != 'number') {
        return "ERROR"
    }
    const smallInt = (int2 > int1) ? int1:int2
    const bigInt = (int2 > int1) ? int2:int1
    let sum = 0

    for (let i = smallInt; i <= bigInt; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
