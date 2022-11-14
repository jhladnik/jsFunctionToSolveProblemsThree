// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter(val=>val%2==0)
  }
  
  //given an array if numbers
  //return the even numbers out of the array using the filter method
  //input([1,2,3,4,5,6]) output([2,4,6]); input([2,2,6,4,7,8]) output([2,2,6,4,8])