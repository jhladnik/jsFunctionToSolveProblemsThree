// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

var nextGreaterElement = function(nums1, nums2) {
    //create an empty array; loop through nums1; create a slice from nums2.idexOf(nums1[i]); filter all greater integers in slice; conditional to find if there are no greater integers, if none, push -1 to the ans array, if there are, push [0] of the filtered array; return array
    let ans = [];
    for(let i=0; i<nums1.length; i++){
        let piece = nums2.slice(nums2.indexOf(nums1[i]));
        let first = piece.filter(el=>el>nums1[i]);
        if(first[0]===undefined){
            ans.push(-1)
        }else{
            ans.push(first[0])
        }
    };
    return ans
};

//given two arrays of integers (nums1, nums2)
//return an array made up of the first greatest elements to the right in nums 2 of the elements listed in nums1; return -1 if there is no greater element
//console.log(nextGreaterElement([4,1,2], [1,3,4,2]), [-1,3,-1]); 
//console.log(nextGreaterElement([2,4], [1,2,3,4]), [3,-1]);