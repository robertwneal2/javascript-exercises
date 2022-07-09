const getTheTitles = function(arrayOfObjects) {
    let bookTitleArray = []
    let title = ''
    for (object of arrayOfObjects) {
        title = object.title
        bookTitleArray.push(title)
    }
    return bookTitleArray
};

// Do not edit below this line
module.exports = getTheTitles;
