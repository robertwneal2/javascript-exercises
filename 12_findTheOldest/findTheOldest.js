const findTheOldest = function(people) {
    let oldestAge = 0
    let oldestPerson = {}
    let deathYear = 0
    let birthYear = 0
    const currentYear = 2022
    for (person of people) {
        deathYear = person.yearOfDeath
        birthYear = person.yearOfBirth
        if (deathYear == undefined) {
            deathYear = currentYear
        }
        age = deathYear - birthYear
        if (age > oldestAge) {
            oldestAge = age
            oldestPerson = person
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
