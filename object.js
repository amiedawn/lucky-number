let employee = {
  employeeId: 51,
  employeeName: 'Larry',
  salary: "$51,000",
  getSalary: function() {
    return this.salary;
  }

}

// both console.logs have same output
console.log(employee.employeeName + "'s salary is " + employee.salary);
console.log(employee.employeeName + "'s salary is " + employee.getSalary());

// output:
// Larry's salary is $51,000
// Larry's salary is $51,000