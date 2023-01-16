// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

var findDifference = function(nums1, nums2) {
    //create an empty array; loop through nums1 and if the index of the integer doesnt exist in nums2, push to empty array; do the same for nums2; remove any duplicates from the newly created arrays; return the two arrays inside of an array
    let missingOne = [];
    for(let i=0; i<nums1.length; i++){
        if(nums2.indexOf(nums1[i])===-1){
            missingOne.push(nums1[i]);
        }
    }

    let missingTwo = [];
    for(let j=0; j<nums2.length; j++){
        if(nums1.indexOf(nums2[j])===-1){
            missingTwo.push(nums2[j]);
        }
    }
    let noDupesOne = [...new Set(missingOne)];
    let noDupesTwo = [...new Set(missingTwo)];

    return [noDupesOne, noDupesTwo]
};

//given 2 arrays of integers (nums1, nums2)
//return an array of arrays; the first element/array should be made up of the integers that are contained in nums1 but not in nums2, the second element/array should be made up of the integers that are contained in nums2 but not in nums1
//console.log(findDifference([1,2,3], [2,4,6]), [[1,3],[4,6]]);
//console.log(findDifference([1,2,3,3],[1,1,2,2]), [[3],[]);