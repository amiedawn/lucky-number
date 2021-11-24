class Employee {
  #empName;
  #empId;
  #designation;
  #salary;

  get salary() {
    return this.#salary;
  }
  set salary(salary) {
    if (salary < 1000) {
      throw new Error(`salary cannot be less than 1000`);
    }
    this.#salary = salary;
  }
}

const employee = new Employee();
employee.salary = 500;
console.log(employee.salary);