// Luke's example

// let numbers = [12, 9, 8]
// console.log(numbers);

// function compareNumbers(num1, num2) {
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// console.log(numbers.sort(compareNumbers));

// Q1. Create an array of numbers and sort them from largest to smallest
let myNums = [10, 16, 9, 21];
function sortToLargest(num1, num2) {
    if (num1 < num2) {
        return 1;
    } else if (num1 > num2) {
        return -1;
    } else {
        return 0;
    }
}

// console.log(myNums.sort(sortToLargest))

// console.log(myNums.sort((num1, num2) => num2 - num1))

// Lukes Example

// let people = [
//     {
//         firstName: "Margaret",
//         lastName: "Cox",
//         age: 35
//     }, {
//         firstName: "Asma",
//         lastName: "Bauer",
//         age: 29
//     }, {
//         firstName: "Aaryan",
//         lastName: "Molloy",
//         age: 22
//     }, {
//         firstName: "Jazmin",
//         lastName: "Flowers",
//         age: 22
//     }
// ];
// function sortByAge(person1, person2) {
//     return person1.age - person2.age;
// }
// function sortByLastName(person1, person2) {
//     if (person1.lastName.toLowerCase() < person2.lastName.toLowerCase()) {
//         return -1;
//     } else if (person1.lastName.toLowerCase() > person2.lastName.toLowerCase()) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let peopleSortedByAge = people.sort(sortByLastName).sort(sortByAge);
// console.log(peopleSortedByAge)

// Q2. Create a sort function that will sort the following array of events into chronological order:

let events = [
    {
        name: "Went on holiday",
        month: 3,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2015
    }, {
        name: "Moved out of home",
        month: 11,
        year: 2019
    }
];

function sortByYear (event1, event2) {    
    return event1.year - event2.year;
}
// function sortByMonth(event1, event2) {
//     return event1.month - event2.month
// }
// let chronologicalOrder = events.sort(sortByMonth).sort(sortByYear)
// console.log(chronologicalOrder)

// Q3. Sort the following array in alphabetical order by last name, then by first name
let people = [
    {
        firstName: "Margaret",
        lastName: "Cox"
    }, {
        firstName: "Aaryan",
        lastName: "Bauer"
    }, {
        firstName: "Asma",
        lastName: "Bauer"
    }, {
        firstName: "Jazmin",
        lastName: "Flowers"
    }
];

// function sortByFirstName(person1, person2) {
//     if (person1.firstName.toLowerCase() < person2.firstName.toLowerCase()) {
//         return -1;
//     } else if (person1.firstName.toLowerCase() > person2.firstName.toLowerCase()) {
//         return 1;
//     } else {
//         return 0;
//     }
// };

// function sortByLastName(person1, person2) {
//     if (person1.lastName.toLowerCase() < person2.lastName.toLowerCase()) {
//         return -1;
//     } else if (person1.lastName.toLowerCase() > person2.lastName.toLowerCase()) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let nameOrder = people.sort(sortByFirstName).sort(sortByLastName);
// console.log(nameOrder)