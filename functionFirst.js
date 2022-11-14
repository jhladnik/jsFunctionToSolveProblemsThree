// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

function first(arr, n) {
    //need a conditional to see if n is existent in the function, if it isn't, only one element is to be returned
    if(n==undefined){
      //return array of the first element of the parameter array if n is undefined
      return arr.slice(0,1);
    }else{
    //return the array of n elements
    }return arr.slice(0,n);
}
  
//given an array of elements and a parameter of n (integer)
//return an array of the first n elements of the array
//input([1,2,3,4,5], 3), output([1,2,3]); input(['q','t','u','s'], 1), output(['q']); input(['joe','david',frank], 2), output(['joe','david'])