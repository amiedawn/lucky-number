let student = {
  firstName: "John",
  lastName: "Doe",
  grade: "A"
}

function getInfo() {
  return null;
};

let {
  name: { 
    firstName: firstName, 
    lastName: lastName, 
    grade: grade
  }
} = student;

console.log(`${firstName} ${lastName} got an ${grade}`);


