function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student ("Василиса", "женский", 19);
const student2 = new Student ("Артём", "мужской", 25);
const student3 = new Student("Дарья", "женский", 19);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if(this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks.push(marks[i]);
  }
}

Student.prototype.getAverage = function() {
  return this.marks.reduce((acc, mark, index) => {
    acc += mark;
    if (index === this.marks.length - 1) {
      return acc / this.marks.length;
    }
    return acc
  }, 0);
}

Student.prototype.exclude = function (reason) {
  
}

student1.setSubject("Algebra");