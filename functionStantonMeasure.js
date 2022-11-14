// The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// Examples
// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

function stantonMeasure(array){
    //filter elements with the number 1 into a new array
    let filtered = array.filter(el=>el==1);
    //find the length of the array of 1's, this will be x
    let x = filtered.length;
    //filter the number(x) out of the original array into a new array
    let xFiltered = array.filter(ex=>ex==x);
    //return the length of the x filtered array
    return xFiltered.length
}
  
//given an array of integers
//return the integer that is the solution of the number(x) of times 1 occurs in the array, then the number of times
//x occurs in the array
//input([1,2,3,1,2,5,6]), output(2); input([1,1,1,3,3,3,3,4,6,7,8]), output(4)