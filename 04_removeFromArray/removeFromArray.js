const removeFromArray = function(array, ...args) {
    let i = args.length - 1
    for (; i >= 0 ; i--) {
        index = array.indexOf(args[i])
        if (index >= 0) {
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
