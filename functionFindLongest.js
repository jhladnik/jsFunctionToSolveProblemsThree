// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    //create an array to hold the split up numbers
    let numHolder = [];
    //we need to loop over the array
    for (let nums of array){
      //lets split the numbers up
      let splits = nums.toString().split("")
      numHolder.push(splits)
    }
    //we need another array of emptiness to do it like this
    let lengArr = [];
    //lets find the length of the arrays in the array
    for (let arrs of numHolder){
      //send the lengths to the length array
      lengArr.push(arrs.length)
    }
    //make it easier on ourselves and create a variable for the largest number of the length array
    let bigNum = Math.max(...lengArr)
    //return the index of array with the largest number
    return array[lengArr.indexOf(bigNum)]
}
  
//given an array of numbers
//return the number with the most digits; if there are two numbers with the same amount of
//digits, return the first number that occurs in the array
//input([1,1,100]), output(100); input([100,110,10]), input(100); input([1,2,3]), output(1)