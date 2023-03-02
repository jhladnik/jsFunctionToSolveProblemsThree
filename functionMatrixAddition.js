// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:

// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

function matrixAddition(a, b){
    //create an empty array; loop through a; create another empty array to hold the subarray sums; loop throught the subs and
    //push the sum of the sub elements to the sub sum holding array; push the sub sum array to the first empty array; return array
    let result = [];
    
    for(let i=0; i<a.length; i++){
      let subs=[];
      for(let j=0; j<a[i].length; j++){
        subs.push(a[i][j]+b[i][j])
      };
      result.push(subs);
    };
    return result
}

//given two matrices (a,b); both will be the same size in length, will contain the same amount of integers
//return a matrix of the same size, containing the sum of the elements in each of the subarrays
//console.log(matrixAddition([[1, 2, 3],[3, 2, 1],[1, 1, 1]], [ [2, 2, 1],[3, 2, 3],[1, 1, 3]]), [[3, 4, 4],[6, 4, 4],[2, 2, 4]])