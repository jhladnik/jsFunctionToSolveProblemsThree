// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

var calPoints = function(operations) {

    let arr = [];

    for(let i=0; i<operations.length; i++){
        if(operations[i]==="C"){
            arr.pop();
        }else if(operations[i]==="D"){
            arr.push(arr[arr.length-1]*2);
        }else if(operations[i]==="+"){
                arr.push(arr[arr.length-1]+arr[arr.length-2]);
        }else{
            arr.push(Number(operations[i]));
        };
    };
    
    let sum = 0;

    for(let j=0; j<arr.length; j++){
        sum += arr[j];
    };

    return sum;
};

//given an array of strings; the strings can consist of numbers as strings which are considered integers for scoring, the letter "C" which invalidates the previous entry, the letter "D" which records a new score that is double the previous score, and the symbol "+" which adds a new entry that is the sum of the previous 2 entries
//return the sum of the operations as an integer
//console.log(calPoints(["5","2","C","D","+"]), 30);
//console.log(calPoints(["5","-2","4","C","D","9","+","+"]), 27);
//console.log(calPoints(["1","C"]), 0);