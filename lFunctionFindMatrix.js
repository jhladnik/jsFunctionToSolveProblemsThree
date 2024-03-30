var findMatrix = function(nums) {
    // create an array that will hold all of the resulting rows
    let result = [];
    
    // use a while loop to get through nums, create a unique array using Set
    while (nums.length >= 1) {
        let holder = [...new Set(nums)];
        // loop through the unique array and remove the first instance of i from nums
        for (let i=0; i<holder.length; i++) {
            nums.splice(nums.indexOf(holder[i]),1)
        }
        // push the unique array to the empty result array
        result.push(holder)
    }
    // return the result array outside of the while loop
    return result
};

// given an array of integers
// return a 2D array of rows containing unique integers
// console.log(findMatrix([1,3,4,1,2,3,1]); [[1,3,4,2], [1,3], [1]]);
// console.log(findMatrix([1,2,3,4]); [1,2,3,4]);