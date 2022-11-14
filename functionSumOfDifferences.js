// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
  
  //given an array of 3 integers
  //return what [0]-[1] and [1]-[2] are summed together after the array has been sorted in descending order
  //input([2,5,6]) output(4); input([6,3,5]) output(3)