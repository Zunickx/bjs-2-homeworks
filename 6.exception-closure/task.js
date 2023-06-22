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