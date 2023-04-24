// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

// Return an array containing the index of the row, and the number of ones in it.

var rowAndMaximumOnes = function(mat) {
    //create an empty array; loop through the matrix; find the sum of each individual subarray and push to the empty array; return an array made up of the arr.indexOf(Math.max(...arr)) and the sum
    let arr = [];

    for(let i=0; i<mat.length; i++){
        let sum = 0;
        for(let j=0; j<mat[i].length; j++){
            sum += mat[i][j];
        };
        arr.push(sum);
    };
    return [arr.indexOf(Math.max(...arr)),Math.max(...arr)]
};

//given a matrix of m x n containing 0's and 1's only
//return an array with the number of row (0th position) with the greatest amount of 1's in the row (1st position); in the event that there are a number of rows with the same number of 1's being the greatest, return the smallest row number
//console.log(rowAndMaximumOnes([[0,1],[1,0]]), [0,1]);
//console.log(rowAndMaximumOnes([[0,0,0],[0,1,1]]), [1,2]);
//console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]]), [1,2]);