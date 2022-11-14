// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50 .

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

function adjacentElementsProduct(array) {
    //create an array to hold some product
    let product = [];
    //create a loop to loop through the array
    for (let i=0; i<array.length-1; i++){
      //multiply adjoining integers
      let multiply = array[i]*array[i+1];
      //push the product of the multiplying
      product.push(multiply);
    }
    return Math.max(...product)
}
  
//given an array of integers; integers can be negative, positive, or 0; array list will have at least 2 elements
//return the maximum product of multiplying 2 adjacent elements
//input([1,2,3,4,5,6]), output(30); input([6,5,2,8,9,4,0,-32]), output(72)