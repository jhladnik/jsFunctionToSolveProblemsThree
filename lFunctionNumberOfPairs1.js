// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

// Return the total number of good pairs.

var numberOfPairs = function(nums1, nums2, k) {
    // Create an empty array to hold our divisors (arrDiv); loop through nums2 and in every iteration, multiply the iterator by k and push the result to arrDiv; initialize a counter to 0; loop through nums1; nest a loop in this loop of arrDiv and on every iteration check to see if nums1[i] is divisible by arrDiv[k], if so, increment counter; return counter after outside loop is complete

    let arrDiv = [];

    for (let j=0; j<nums2.length; j++) {
        arrDiv.push(nums2[j]*k)
    };

    let count = 0;

    for (let i=0; i<nums1.length; i++) {
        for (let k=0; k<arrDiv.length; k++) {
            if (nums1[i] % arrDiv[k] === 0) {
                count++
            }
        }
    }

    return count
};

// Given interger arrays nums1 and nums2 of the same or different lengths and an integer k; given the definition of a good pair being if nums1[i] is divisible by nums2[j]*k
// Return the amount of good pairs
// console.log(numberOfPairs([1,3,4], [1,3,4], 1), 5);
// console.log(numberOfPairs([1,2,4,12], [2,4], 3), 2);