function parseCount (NumberP) {
    if(NumberP === NaN){
      throw new Error ('невалидное значение');
    }
return Number.parseInt(NumberP);
}