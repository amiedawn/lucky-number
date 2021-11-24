// example 1:

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// let john = new Person("John Doe");
// let mark = new Person("Mark Woods");
// console.log(john.getName()); // John Doe
// console.log(mark.getName()); // Mark Woods

// example 2:

// class User {
//   constructor(name) {
//     console.log('inside constructor');
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const user = new User('Jon Snow');
// console.log(user.getName()); // Jon Snow

// example 3:
// make private:

// class User {
//   #title;
//   #name;
//   constructor(name) {
//     console.log('inside constructor');
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }

// const user = new User('Jon Snow');
// console.log(user.getName()); // Jon Snow

// example 4:

class User {
  #nameValue;
  
  get name() {
    return this.#nameValue;
  }
  set name(name) {
    if (name === "") {
      throw new Error(`name cannot be empty`);
    }
    this.#nameValue=name;
  }
}

const user = new User();
user.name = 'White';
console.log(user.name); // White

// class 5:

// class User {
//   static TYPE_ADMIN = 'admin';
//   static TYPE_REGULAR = 'regular';
//   name;
//   type;
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
// }
//   const admin = new User('Site admin', User.TYPE_ADMIN);
//   console.log(admin.type === User.TYPE_ADMIN); // true