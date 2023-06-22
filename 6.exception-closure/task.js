function parseCount(arg) {
    if(isNaN(arg)){
      throw new Error ('Невалидное значение');
    } else {
        return Number.parseFloat(arg);
    }
}

function validateCount(arg){
    try{
      return parseCount(arg);
    } catch(Error) {
      return Error;
    }
}


class Triangle {
    constructor(sideA, sideB, sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if(this.sideA + this.sideB < this.sideC || this.sideA + this.sideC < this.sideB || this.sideC + this.sideB < this.sideA) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        let p = 0.5 * (this.sideA + this.sideB + this.sideC);
        return Number(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
    }
}