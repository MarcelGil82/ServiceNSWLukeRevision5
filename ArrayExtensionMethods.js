// .find and .filter method
// Luke's Example:
// let myArray = [
//     "Jim",
//     "Bob",
//     "Harry",
//     "Dana"
// ];
// function findNamesWith3Char(element, index, array) {
//                                                      // console.log(element); // output the names above
//                                                      // console.log(index) // output index
//                                                      // console.log(array) // output the array
// if (element.length == 3) {
//     return true;
// }
// }
// let namesWith3Char = myArray.find(findNamesWith3Char);
// console.log(namesWith3Char)

// let myNames = ["Marcel", "Damien", "Fred", "Lara"];
// let myNums = [18, 7, 15, 35];

// Q1. Write some code to find the first name in the names array that starts with an "F"

// function findNameStartingWithF (element) {
//     if (element[0] == "F") {
//         return true;
//     }
// }
// let nameStartingWithF = myNames.find(findNameStartingWithF);
// console.log(nameStartingWithF)

// arrow function

// let findNameStartingWithF = myNames.find(element => element[0] == "F");
// console.log(findNameStartingWithF)

// Q2. Write some code to find the first number in the numbers array that is smaller than 10

// function findNumUnder10 (element) {
//     if (element <= 10) {
//         return true;
//     }
// }
// let numUnder10 = myNums.find(findNumUnder10);
// console.log(numUnder10)

// // arrow function

// let numUnder10 = myNums.find(element => element <= 10);
// console.log(numUnder10)

// // Q3. Write some code to find all the names that are 4 or less characters long

// function findNamesUnder4CharLong (element) {
//     if (element.length <= 4) {
//         return true;
//     }
// }
// let namesUnder4CharsLong = myNames.filter(findNamesUnder4CharLong);
// console.log(namesUnder4CharsLong)

// arrow function
// let findNamesUnder4CharLong = myNames.filter(element => element.length <= 4);
// console.log(findNamesUnder4CharLong)

// Q4. Write some code to find all the numbers in the numbers array that are divisible by 3

// function findDivisibleBy3 (element) {
//     if (element % 3 == 0) {
//         return true;
//     }
// }
// let divisibleBy3 = myNums.filter(findDivisibleBy3);
// console.log(divisibleBy3)

// arrow function
// let findDivisibleBy3 = myNums.filter(element => element % 3 ==0);
// console.log(findDivisibleBy3)

// Luke's Example
// let schools = [{
//     name: "School1",
//     address: "Rover Street",
// }, {
//     name: "School2",
//     address: "Valley Avenue"
// }, {
//     name: "School3",
//     address: "Long Road"
// }
// ];

// let schoolWithAddressStartingWithR = schools.find(school => school.address[0].toLocaleLowerCase() == "r");
// console.log(schoolWithAddressStartingWithR)

// Create an array of people with the following properties: firstName, lastName, age

// let people = [
//     {
//         firstName: "John",
//         lastName: "Smith",
//         age: 21
//     }, {
//         firstName: "Mitchell",
//         lastName: "Roberts",
//         age: 35
//     }, {
//         firstName: "Sam",
//         lastName: "Fitzsimmons",
//         age: 16
//     }, {
//         firstName: "Jim",
//         lastName: "Nick",
//         age: 12
//     }
// ];

// Q5 - Write some code to find the first person that is under 18 years old and log their full name;

// function findPersonUnder18 (people) {
//     return (people.age < 21)
// }
// let personUnder21 = people.find(findPersonUnder18)
// console.log(personUnder21)

// arrow

// let findPersonUnder18 = people.find(people =>people.age < 21)
// console.log(findPersonUnder18)

// Q6 - Write some code to get an array of all the people that have more than 10 characters in their first and last names combined (eg. Luke Parker has exactly 10 characters and should not be included)

// function peopleWith10OrMoreChar (people) {
//     if (people.firstName.length + people.lastName.length > 10) {
//         return true;
//     }
// }
// let tenOrMoreChar = people.filter(peopleWith10OrMoreChar)
// console.log(tenOrMoreChar)

// arrow

// let tenOrMoreChar = people.filter(people => people.firstName.length + people.lastName.length > 10)
// console.log(tenOrMoreChar)

// Q7 - Write some code to find all the people that have their last name longer than their first name.

// function lastNameLonger (people) {
//     if (people.firstName.length < people.lastName.length) {
//         return true;
//     }
// }
// let longerLastName = people.filter(lastNameLonger);
// console.log(longerLastName)

// arrow

// let longerLastName = people.filter(people => people.firstName.length < people.lastName.length);
// console.log(longerLastName)

// .some method - returns a boolean if the condition matches at least 1

// Luke's Example

// let numbers = [1, 2, 3, 4, 5];
// let hasEvenNumbers = numbers.some(num => num % 2 == 0);
// console.log(hasEvenNumbers)

// Q1. Create an array of numbers. Use array extension methods to find whether
// all the elements in the array have a value that is not divisible by 5
// let myNums = [10, 8, 6, 15, 18, 20];
// let numDivisibleBy5 = myNums.every(myNums => myNums % 5 == 0);
// console.log(numDivisibleBy5)

// Q2. Create an array of strings. 
// Use array extension methods to find whether any of the elements begin with a vowel.

// let animalArray = ["Dingo", "Echidna", "Horse", "Owl", "Chicken"]

// let animalWithVowel = animalArray.some(animal => ["a", "e", "i", "o", "u"].includes(animal[0].toLowerCase()));
// console.log(animalWithVowel)

// Q3. Create an array of pets (name, age, owner) and use array extension methods to find whether any of the pets are owned by Luke.
let pets = [
    {
        name: "Fido",
        age: 6,
        owner: "Quinn"
    }, {
        name: "Spot",
        age: 2,
        owner: "Luke"
    }, {
        name: "Quincy",
        age: 4,
        owner: "Caleb"
    }
];

// let petOwnedByLuke = pets.some(pets => pets.owner == "Luke") 
// console.log(petOwnedByLuke)

// Q4. Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) 
// and tells Jimmy's parents if the array contains any pets that have a name or owner with the letter Q. 
// You must use a for..in loop for this.

// for (const pet in pets) {
//     if (pet.name.toLowerCase().some("q") || pet.owner.toLowerCase().some("q")) {
//         console.log(pet.name + pet.owner)
//     }
// }
// Luke's Code
// function findPetIncludingQ(pet) {
//     for (const key in pet) {
//         const element = pet[key].toString().toLowerCase();
//         if (element.includes("q")) {
//             return true;
//         }
//     }
// }

// let hasQ = pets.some(findPetIncludingQ);
// console.log(hasQ)