var getSneakyNumbers = function(nums) {
    // Sort nums in ascending order; create an empty array to hold duplicates; loop through nums and push any duplicate to the new array; remove the duplicates from the new array and return the result
    let order = nums.sort((a,b) => a-b);

    let dupes = [];

    for (let i=0; i<order.length; i++) {
        if (order[i] === order[i-1]) {
            dupes.push(order[i]);
        }
    }

    return [...new Set(dupes)]
};

// given an array of integers in no specific order (nums)
// return an array of the integers in nums that occur more than once
// console.log(getSneakyNumbers([0,1,1,0]), [0,1]);
// console.log(getSneakyNumbers([0,3,2,1,3,2]), [2,3]);
// console.log(getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2]]), [4,5]);