// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

var twoOutOfThree = function(nums1, nums2, nums3) {
    //create an empty array; loop through the arrays and use a conditional to see if the index of the element exists in the other arrays, if it exists atleast 1 more time in another array, push the element to the empty array; repeat this with all three arrays; create a new Set on the created array to extract any dupes, and return
    let repeat = [];

    for(let i=0; i<nums1.length; i++){
        if(nums2.indexOf(nums1[i])!==-1 || nums3.indexOf(nums1[i])!==-1){
            repeat.push(nums1[i]);
        };
    };

    for(let i=0; i<nums2.length; i++){
        if(nums1.indexOf(nums2[i])!==-1 || nums3.indexOf(nums2[i])!==-1){
            repeat.push(nums2[i]);
        };
    };

    for(let i=0; i<nums3.length; i++){
        if(nums2.indexOf(nums3[i])!==-1 || nums1.indexOf(nums3[i])!==-1){
            repeat.push(nums3[i]);
        };
    };

    return [...new Set(repeat)]
};

//given 3 arrays of integers
//return an array of integers that exists in atleast 2 of the 3 given arrays
//console.log(twoOutOfThree([1,1,3,2], [2,3], [3]), [3,2]);
//console.log(twoOutOfThree([3,1], [2,3], [1,2]), [2,3,1]);
//console.log(twoOutOfThree([1,2,2], [4,3,3], [5]), []);