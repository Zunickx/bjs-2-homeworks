function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student ("Василиса", "женский", 19);
const student2 = new Student ("Артём", "мужской", 25);
const student3 = new Student("Дарья", "женский", 19);

Student.prototype.setSubject = function (subjectName) {
  
}

Student.prototype.addMarks = function (...marks) {
  
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
