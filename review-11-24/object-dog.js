// dog object with properties and a method
// let dog = {
//   name: 'Fido',
//   color: 'black',
//   age: 5,
//   bark() {
//     console.log('Woof');
//   }
// };

// dog.bark();

//constructor function
// function Dog(name, color, age) {
//   this.name = name;
//   this.color = color;
//   this.age = age;
//   this.bark = function() {
//     return("Woof");
//   };
// }

// let puppy = new Dog("London", "brown", 1);
// console.log(puppy.bark());

// dog class : this is not complete or correct
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log("Woof");
  }
  eat() {
    return this;
  }
}

let dogObject = new Dog();
Dog.bark();
let bark = Dog.bark;
bark();