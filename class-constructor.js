class Employee {
  #empName;
  #empId;
  #designation;
  #salary;

  // don't include salary or it won't set it later
  constructor (empName, empId, designation) {
    this.#empName = empName;
    this.#empId = empId;
    this.#designation = designation;
  }
  
  get empName() {
    return this.#empName;
  }

  set empName(name) {
    this.#empName = name;
  }
  
  get empName() {
    return this.#empId;
  }

  set empId(id) {
    this.#empId = id;
  }
  
  get empName() {
    return this.#designation;
  }

  set empName(designation) {
    this.#designation = designation;
  }
  
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

let emp1 = new Employee(55, "Bobby", "Manager");
emp1.salary = 1900;
console.log(emp1.salary);