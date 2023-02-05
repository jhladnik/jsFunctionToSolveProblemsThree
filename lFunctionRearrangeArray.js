// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

var rearrangeArray = function(nums) {
    //create an empty array; use filter to filter out all positive numbers from the given array; use a filter to filter out all negative numbers from the given array; loop over the array and push a pair [+,-] to the empty array; return the array after flat
    let mixedCorrect = [];
    let pos = nums.filter(el=>el>=0);
    let neg = nums.filter(eg=>eg<0);

    for(let i=0; i<pos.length; i++){
        mixedCorrect.push([pos[i],neg[i]]);
    }
    return mixedCorrect.flat()
};

//given an array of both positive and negative integers; the amount of positve integers will be the same amount as the negative integers;
//return an array that satisfies the following: every consecutive pair should have opposite signs, the order in which the integers should not be disrupted (pos for pos and neg for neg), and the array should begin with a positive integer
//console.log(rearrangeArray([3,1,-2,-5,2,-4]), [3,-2,1,-5,2,-4]);
//console.log(rearrangeArray([-1,1]), [1,-1]);