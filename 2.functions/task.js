function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    } 
    
    if (arr[i] < min){
      min = arr[i];
    } 
    
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

getArrayParams(-99, 99, 10);

function summElementsWorker(...arr) {
  // let sumArr = arr.reduce(function(sum, index){
  //   return sum + index;
  // })
  // return sumArr;

  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}

summElementsWorker(10, 10, 11, 20, 10);

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];
  let difference = 0;

  for (let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }

    if(arr[i] < min){
      min = arr[i];
    }

    difference = max - min;
  }

  return difference;
}

differenceMaxMinWorker(10, 10, 11, 20, 10);

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
