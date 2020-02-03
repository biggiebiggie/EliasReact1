class Employee {
  bosses = [];
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  addClass(boss) {
    this.bosses.push(boss);
  }
}

const employee1 = new Employee("Viktor", "IT");
employee1.addClass("Boss1");
console.log(employee1.bosses);
