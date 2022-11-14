// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    //make it easy and use slice
    let give = arr.slice(0,n);
    return give
}
  
//given a list/array and the number (n);
//return an array of the first (n) elements
//input([1,2,3],2), output([1,2]); input([1,2,3,4,5,6,7],4), output([1,2,3,4])