﻿function parseCount(NumberP) {
    if(isNaN(NumberP)){
      throw new Error ("Невалидное значение");
    } else {
        return Number.parseFloat(NumberP);
    }
}

function validateCount(NumberP){
    try{
      return parseCount(NumberP);
    } catch(Error) {
      return Error;
    }
}