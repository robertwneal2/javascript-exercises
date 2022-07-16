// const findTheOldest = function(people) { //using for loop
//     let oldestAge = 0
//     let oldestPerson = {}
//     let deathYear = 0
//     let birthYear = 0
//     const currentYear = 2022
//     for (person of people) {
//         deathYear = person.yearOfDeath
//         birthYear = person.yearOfBirth
//         if (deathYear == undefined) {
//             deathYear = currentYear
//         }
//         age = deathYear - birthYear
//         if (age > oldestAge) {
//             oldestAge = age
//             oldestPerson = person
//         }
//     }
//     return oldestPerson
// };

const findTheOldest = function(people) { //using sort
    const currentYear = 2022
    const ordered = people.sort((a, b) => {
        aBirth = a.yearOfBirth
        aDeath = a.yearOfDeath
        bDeath = b.yearOfDeath
        bBirth = b.yearOfBirth
        aDeath = aDeath == undefined ? currentYear : aDeath//check if not dead yet
        bDeath = bDeath == undefined ? currentYear : bDeath
        aAge = aDeath - aBirth
        bAge = bDeath - bBirth
        return aAge >= bAge ? -1 : 1
    })
    return ordered[0]
}

// Do not edit below this line
module.exports = findTheOldest;
