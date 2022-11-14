// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let arraySum = (array.reduce((acc,c)=>acc+c,0));
    if(arraySum>0){
      return (arraySum/array.length)
    }else{
      return 0
    }
  }