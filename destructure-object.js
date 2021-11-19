// example 1:

// let display = person => console.log(`${person.firstName} ${person.lastName}`);
// let person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// display(person);

// example 2:

// let person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// let {firstName, lastName} = person;

// console.log(firstName); // John

// example 3:

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18
// };

// let {firstName, lastName, age=28} = person;

// console.log(age); // 18

// example 4:

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// let employee = {};

// let { firstName, lastName, age = 28 } = employee;

// console.log(age); // 28

// example 5:


// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// function getScores() {
//   return null;
// };

// let employee = {
//   id:101,
//   name: {
//     firstName: 'Mark',
//     lastName: 'Spencer'
//   }
// };

// let { 
//   name: {firstName, lastName} 
// }= employee;

// console.log(lastName); // 28

// example 6:

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// function getScores() {
//   return null;
// };

// let employee = {
//   id:101,
//   name: {
//     firstName: 'Mark',
//     lastName: 'Spencer'
//   }
// };

// let { 
//   id,
//   name: {firstName, lastName} 
// }= employee;

// console.log(lastName); // 28
// console.log(id); // 101

