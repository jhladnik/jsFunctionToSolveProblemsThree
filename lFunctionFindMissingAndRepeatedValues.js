// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

var findMissingAndRepeatedValues = function(grid) {
    // remove all sub arrays to make the grid one array and sort
    let flatGrid = grid.flat().sort((a,b)=>a-b);
    
    // result holder
    let results = [];

    // loop through the flatGrid
    for (let i=0; i<flatGrid.length; i++) {
        // use conditional to see if we have a repeating element
        if (flatGrid.indexOf(i+1) === -1) {
            results.push(i+1)
        } else if (flatGrid.indexOf(i+1) !== flatGrid.lastIndexOf(i+1) && results.length > 0) {
            results.unshift(i+1)
        } else if (flatGrid.indexOf(i+1) !== flatGrid.lastIndexOf(i+1) && results.length === 0) {
            results.push(i+1)
        }
    }
    return results
};

// given a matrix of size n*n containing integers from 1 to n^2; one integer will
// be missing in this range and one will have a double or occur twice
// return an array that contains the integer that is repeated (a) and the 
// integer that is missing (b) in this form [a,b]
// console.log(findMissingAndRepeatedValues([[1,3],[2,2]]); [2,4]);
// console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]); [9,5]);