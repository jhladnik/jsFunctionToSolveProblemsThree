// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

var getCommon = function(nums1, nums2) {
    //loop through one of the arrays; use a conditonal to see if the index of the integer exists in the other array, if so, return it; return -1 if loop completes

    for(let i=0; i<nums1.length; i++){
        if(nums2.indexOf(nums1[i])!==-1){
            return nums1[i];
        };
    };
    return -1
};

//given two arrays, both of them containing integers in non-decreasing order
//return the lowest value integer that appears in both of the arrays; return -1 if there is no such integer
//console.log(getCommon([1,2,3],[2,4]), 2);
//console.log(getCommon([1,2,3,6],[2,3,4,5]), 2);