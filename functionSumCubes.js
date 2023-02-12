// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

function sumCubes(n){
    //use a loop from 1 to n to find the cubed integers that will need to be summed; push these to an empty array;
    //return the result of the array being reduced
    
    let cubed = [];
    
    for(let i=1; i<=n; i++){
      cubed.push(Math.pow(i,3));
    };
    return cubed.reduce((acc,c)=>acc+c,0)
}

//given an integer (n); n will always be positive
//return the sum of all of the values from 1 to and including n, having been cubed
//console.log(sumCubes(2), 9);
//console.log(sumCubes(1), 1);
//console.log(sumCubes(12), 6084);