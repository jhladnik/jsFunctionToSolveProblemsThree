// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

function newAvg(arr, newavg) {
    //find the length of the array and add one; multiply this sum by newavg; find the sum of the original array;
  //return the difference of the product-sum rounded to nearest integer; if it is less than 0, return -1
  
  let product = (arr.length+1)*newavg;
  let sum = arr.reduce((acc,c)=>acc+c,0);
  
  if(Math.round(product-sum)>=0){
    return Math.round(product-sum);
  }
  return -1;
}

//given an array of integers and an integer that represents the needed average
//return an integer rounded that represents what the next integer in the array should be if we want the average to be the
//average given; if the integer is less than 0, return -1
//console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
//console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);