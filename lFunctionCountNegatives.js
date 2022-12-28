// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

var countNegatives = function(grid) {
    //create an empty array to hold negatives; use the .flat method to remove all inner square brackets and make one continuous array; then loop through the new array pushing any neg to the empty array; return the length of the neg holder
    let negs = [];
    let noSquareB = grid.flat();

    for(let i=0; i<noSquareB.length; i++){
        if(noSquareB[i]<0){
            negs.push(noSquareB[i]);
        }
    }
    return negs.length
};

//given a matrix of integers that can be positive and negative
//return the amount of negative integers in the matrix; if the matrix does not contain any negatives, return 0
//console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]), 8);
//console.log(countNegatives([[3,2],[1,0]]), 0);