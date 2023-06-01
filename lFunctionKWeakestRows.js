// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

var kWeakestRows = function(mat, k) {
    //create an array for holding sums (sums); loop through the matrix; sum each element and push to sums with i in the form of [sum,i]; sort by sums[sum]; create a slice from 0 to k (cut); return a map of cut which returns the cut[1]
    let sums = [];

    for(let i=0; i<mat.length; i++){
        let sum = mat[i].reduce((acc,c)=>acc+c,0);
        sums.push([sum,i])
    };

    sums.sort((a,b)=>a[0]-b[0]);

    let cut = sums.slice(0,k);

    let indexForm = [];

    for(let j=0; j<cut.length; j++){
        indexForm.push(cut[j][1]);
    };

    return indexForm
};

//given a matrix of m x n filled with 1's and 0's as integers with the 1's in the row preceding the 0's; given an integer k
//return the first k indexes of least value in the matrix
//console.log(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]],3), [2,0,3]);
//console.log(kWeakestRows([[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]],2), [0,2]);