var findIntersectionValues = function(nums1, nums2) {
    //create two counters (x,y) and assign them 0 value; loop through nums1; use a conditional to see if nums1[i] exists in nums2, if it does, increment x; repeat the same for nums2 and increment y; return [x,y]

    let x = 0;
    let y = 0;

    for (let i=0; i<nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            x++
        }
    };

    for (let j=0; j<nums2.length; j++) {
        if (nums1.includes(nums2[j])) {
            y++
        }
    };

    return [x,y]
};

//given two arrays of integers (nums1, nums2)
//return an array containing 2 integers, the first being the sum of how many of the elements in nums1 occur in nums2, and the second being the sum of how many of the elements in nums2 occur in nums1
//console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6]), [3,4]);
//console.log(findIntersectionValues([3,4,2,3], [1,5]), [0,0]);