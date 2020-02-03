const faker = require("faker");
const Student = require("../Student");

let students = [];

for (let i = 1; i <= 10; i++) {
  const student = new Student(
    i + ". " + faker.name.firstName(),
    faker.name.lastName()
  );

  students.push(student);
}

console.log(students);
