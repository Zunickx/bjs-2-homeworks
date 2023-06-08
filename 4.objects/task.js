function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student ("Василиса", "женский", 19);
const student2 = new Student ("Артём", "мужской", 25);
const student3 = new Student("Дарья", "женский", 19);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...mark) {
  if(this.marks === undefined) {
    this.marks = mark;
  } else {
    this.marks.push(mark[i]);
  }
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
