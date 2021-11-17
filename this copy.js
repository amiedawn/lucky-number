let person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    console.log(this.firstName + " " + this.lastName);
    console.log(person.firstName + " " + person.lastName); // not preferred, but same as with this
    
  }

}

person.getFullName(); 

// output:
// John Doe
// John Doe

//*******

