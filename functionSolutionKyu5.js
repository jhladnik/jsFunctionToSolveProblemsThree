// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

var solution = function(firstArray, secondArray) {
    //create an empty array; create a loop over firstArray; in the loop find the difference of the elements
    //in the 2 arrays, square it, push it to the empty array; return the average of the new arrays elements
    let squares = [];
    
    for(let i=0; i<firstArray.length; i++){
      let diff = Math.abs(firstArray[i]-secondArray[i]);
      squares.push(Math.pow(diff,2))
    }
    return squares.reduce((acc,c)=>acc+c,0)/squares.length
}

//given two arrays of integers
//return an integer that is the average of the difference of firstArray[i] and secondArray[i] squared
//console.log(solution([1, 2, 3], [4, 5, 6] ), 9);
//console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]), 16.5);
//console.log(solution([-1, 0], [0, -1]), 1);