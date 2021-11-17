let employee = {
  employeeId: 51,
  employeeName: "Larry",
  salary: "51,000",
  getSalary: function () {
    return this.salary;
  },
};

// this is the constructor function of the "employee" object literal
function Employee(employeeId, employeeName, salary) {
  this.employeeId = employeeId;
  this.employeeName = employeeName;
  this.salary = salary;
  this.getSalary = function () {
    return this.salary;
  }
};

let employee1 = new Employee(1, "Bob", 2000);
let employee2 = new Employee(2, "Sally", 4000);
console.log(employee1.employeeName + "'s salary is " + employee.getSalary());
console.log(employee2.employeeName + "'s salary is " + employee.getSalary());


// both console.logs have same output
// console.log(employee.employeeName + "'s salary is " + employee.salary);
// console.log(employee.employeeName + "'s salary is " + employee.getSalary());

// output:
// Larry's salary is 51,000
// Larry's salary is 51,000