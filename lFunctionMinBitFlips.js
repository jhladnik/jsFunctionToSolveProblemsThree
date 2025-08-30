// A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

// For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.
// Given two integers start and goal, return the minimum number of bit flips to convert start to goal.

var minBitFlips = function(start, goal) {
    // convert start and goal to binary and separate to an array
    const biStart = start.toString(2);
    const biGoal = goal.toString(2);

    // figure out the max length
    const maxLen = Math.max(biStart.length, biGoal.length);

    // make sure that the array that the string is being split into keeps the leading 0
    const arrStart = biStart.padStart(maxLen, "0").split("");
    const arrGoal = biGoal.padStart(maxLen, "0").split("");

    // initialize counter
    let count = 0

    // loop through arrStart from end to beginning and see if the string matches to arrGoal, if so, leave it, if not change it. Iterate counter for every change
    for (let i=arrStart.length; i>=0; i-- ) {
        if (arrStart[i] !== arrGoal[i]) {
            count++
        }
    }

    return count

};

// Given two integers (start, goal); given the rule that one bit can be flipped from 0 to 1 or 1 to 0 with each pass
// Return an integer that represents the minimum number of passes it will take to go from start to goal
// console.log(minBitFlips(10, 7), 3);
// console.log(minBitFlips(3, 4), 3);