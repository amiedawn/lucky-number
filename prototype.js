// example 1:

// let superobj = {
//   color: 'red'
// };

// let subobj = {
//   height: 'medium'
// };
 
// subobj.__proto__= superobj;

// console.log(subobj.color); // red


//*****

//example 2:

// let animal = {
//   eats: true,
//   walk: function() {
//     return true;
//   }

// };

// let rabbit = {
//   jumps: true
// };

// let longEar = {
//   earLength: 10
// };

// longEar.__proto__ = rabbit;
// rabbit.__proto__ = animal;

// console.log(longEar.eats); //true

// example 3:

let animal = {
  isSleeping: true, // need this to make "console.log(animal.isSleeping)"" true
  walk() {
    if (!this.isSleeping) {
      console.log('I walk');
    }
  },
  sleep() {
    this.isSleeping = true; // animal is not calling the sleep method
  }
};

let rabbit = {
  name: 'white-rabbit',
  __proto__: animal
};

rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping);  // undefined