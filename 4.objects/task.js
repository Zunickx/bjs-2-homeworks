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
  if(this.marks != undefined){
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function() {
  if((this.marks === undefined) || (this.marks.length === 0)){
    return 0;
  } else {
    let sum = this.marks.reduce((acc, item)=> acc + item, 0);
    return (sum / this.marks.length);  
  }
}

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}