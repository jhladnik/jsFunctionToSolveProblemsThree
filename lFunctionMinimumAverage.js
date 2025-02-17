// You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

// You repeat the following procedure n / 2 times:

// Remove the smallest element, minElement, and the largest element maxElement, from nums.
// Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.

var minimumAverage = function(nums) {
    // create a duplicate array of nums for sorting purposes (dupe); sort nums in increasing order (inOrder); sort dupe in decreasing order (decreasing); create an empty array (averages); loop through inOrder, on each iteration sum inOrder[i] and decreasing[i] then divide by 2 (avg), push avg to averages; find the smallest element in averages and return it
    let dupe = nums.slice()
    let inOrder = nums.sort((a,b) => a-b);
    let decreasing = dupe.sort((a,b) => b-a);

    let averages = [];

    for (let i=0; i<inOrder.length; i++) {
        let avg = (inOrder[i] + decreasing[i]) / 2;
        averages.push(avg)
    }

    let smallest = Math.min(...averages)

    return smallest
};

// given an array of integers of n length (nums)
// return the smallest average of two of the integers in nums if you can take the minimum and maximum of the array, average them and then remove them from nums n/2 times at most
// console.log(minimumAverage([7,8,3,4,15,13,4,1]), 5.5);
// console.log(minimumAverage([1,9,8,3,10,5]), 5.5);
// console.log(minimumAverage([1,2,3,7,8,9]), 5.0);