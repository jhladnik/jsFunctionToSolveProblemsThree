// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
    //create an array to hold our even numbers
    let evens = [];
    //create a loop to loop through the array
    for (let i=0; i<array.length; i++){
      //we need a conditional to find the evens
      if(array[i]%2==0){
        //push all of the even numbers to the array so we can mess with the array
        evens.push(array[i]);
      }
    }
    //return a new array by slicing the 'number' of integers needed from the back by using the '-' operator
    return evens.slice(-number)
}
  
//given an array of integers and a 'number' of elements; every array will atleast have an array with 'number' elements that are even
//return an array with the length of 'number' of only even integers from the original array, the even integers need to be found
//at the starting from the back of the array and should be returned in the original order
//input([2,4,6,8], 2), output([6,8]); input([0,4,75,9,2,4,9], 3), output([4,2,4]); input([-2,-5,-7,-1,-8], 1), output([-8])