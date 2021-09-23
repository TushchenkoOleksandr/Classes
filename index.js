class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getInfo() {
    return { name: this.name, position: this.position, salary: this.salary };
  }

  changSalary(value) {
    this.salary = value;
  }
}

class Director extends Employee {
  constructor(name, position, salary) {
    super(name, position, salary);
  }

  increaseSalaryTwice(employee) {
    employee.changSalary(employee.getInfo().salary * 2);
  }
}
class Accountant extends Employee {
  constructor(name, position, salary) {
    super(name, position, salary);
  }

  accountTax(employee) {
    const employeeSalary = employee.getInfo().salary;
    const taxesValue = { percent: 20 };
    return {
      salary: employeeSalary,
      taxes: employeeSalary * taxesValue.percent / 100,
      salaryAfterPayTax: employeeSalary - employeeSalary * taxesValue.percent / 100,
    };
  }
}
class Driver extends Employee {
  constructor(name, position, salary, drivingLicenseCategory) {
    super(name, position, salary);
    this.drivingLicenseCategory = drivingLicenseCategory;
  }

  getDrivingLicenseCategory() {
    return this.drivingLicenseCategory;
  }
}

const director = new Director("Bob", "director", 3000);
const accountant = new Accountant("Margo", "accountant", 2000);
const driver = new Driver("Sam", "driver", 1000, "B");

console.log("Inf about driver", driver.getInfo());
console.log("Driving License Category is", driver.getDrivingLicenseCategory());

director.increaseSalaryTwice(driver);

console.log("Inf about driver", driver.getInfo());
console.log("director tax", accountant.accountTax(director));