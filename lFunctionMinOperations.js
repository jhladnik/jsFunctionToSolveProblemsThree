// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

var minOperations = function(boxes) {
    // create a holder for the counts
    let movements = [];

    // loop through the string
    for (let i=0; i<boxes.length; i++) {
        // create a counter
        let count = 0;
        // nest a loop through boxes
        for (let j=0; j<boxes.length; j++) {
            // use a conditional to see if the jth element is a "0" or "1"
            if (boxes[j] === "1" && j !== i) {
                let moves = Math.abs(j-i);
                // add moves to count
                count += moves
            }
        }
        // push count after iteration to movements
        movements.push(count);
    }
    return movements
};

// given a string of numbers; numbers that make up the string are either "1" or "0";
// "1" denotes a ball in the space, "0" denotes nothing in the space; a ball can be
// moved one space at a time
// return an array of integers that represents the amount of moves it takes to get every
// ball to that space/position
// console.log(minOperations("110"); [1,1,3]);
// console.log(minOperations("001011"); [11,8,5,4,3,4]);