// There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.

// A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.

// Return an array containing the indices of all stable mountains in any order.

var stableMountains = function(height, threshold) {
    // Initialize an empty array to hold the results
    let stable = [];

    // Loop through height array; create a conditional that will see if the integer at height[i-1] is greater than threshold, if it is, push i to result array
    for (let i=0; i<height.length; i++) {
        if (height[i-1] > threshold) {
            stable.push(i)
        }
    }

    // Return result array
    return stable
};

// Given an array of integers "height", and an integer "threshold"; given the definition of "stable" being that if an index-1 in height is greater than threshold, it is considered stable
// Return an array of integers that represent the stable indices of height
// console.log(stableMountains([1,2,3,4,5], 2), [3,4]);
// console.log(stableMountains([10,1,10,1,10], 3), [1,3]);
// console.log(stableMountains([10,1,10,1,10], 10), []);