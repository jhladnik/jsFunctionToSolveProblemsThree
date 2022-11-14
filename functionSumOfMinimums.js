// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
    // create a new array to store the minimums of the arrays
    let minimums = [];
    //find the minimums of all of the arrays and push to the new array
    for(let els of arr){
      minimums.push(Math.min(...els))
    }
    //return the sum of the new array elements
    return minimums.reduce((acc,c)=>acc+c,0)
  }
  
  //given an array of arrays
  //return the sum of the smallest values of each of the inner arrays
  //input([1,2,3,4],[2,3,4,5],[3,4,5,6]), output(6); input([5,4,3,2,8,8],[8,4,3,9,4,11]), output(5)