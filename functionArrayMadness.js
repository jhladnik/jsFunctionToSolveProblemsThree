// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
    //create a new array of a squared and sum it
    let l7 = a.map(el=>Math.pow(el,2)).reduce((acc,c)=>acc+c,0)
    //create a new array for b cubed and sum it
    let threeDims = b.map(zeb=>Math.pow(zeb,3)).reduce((acc,c)=>acc+c,0)
    //lets see if we have a true or not
    return l7>threeDims? true:false
}
  
//given two arrays of integers of equal or greater length than 1; the first array (a) needs to be squared;
//the second array (b), needs to be cubed
//return "true" if (a)array has a sum that is larger than the (b)array sum
//input([2],[2]), output(false); input([1,2],[0,1]), output(true)