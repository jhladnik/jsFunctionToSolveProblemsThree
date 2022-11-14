// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
    //create an empty new array to hold the returned integers
    let arrayOfIntegers = []
    //create a loop from 1 to n including n
    for(let i=1;i<=n;i++){
    //push integers from loop to new array
      arrayOfIntegers.push(i);
      }
    //return new array
    return arrayOfIntegers
  }
  
  //given n which is a positive integer, greater than or equal to 1
  //return an array from 1 to n including n
  //input(4) output([1,2,3,4]); input(12) output([1,2,3,4,5,6,7,8,9,10,11,12])
