// You are given two 2D integer arrays nums1 and nums2.

// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.

// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.

var mergeArrays = function(nums1, nums2) {
    //create a map; merge nums1 into the map; merge nums2 into the map; create a sorted array from the entries in the map, sort in ascending by the first element of the entry and return
    const map = new Map();
  
    for(let [id, val] of nums1) {
        if(!map.has(id)){
            map.set(id, 0);
        }
        map.set(id, map.get(id) + val);
    };
    
    for(let [id, val] of nums2) {
        if(!map.has(id)){
            map.set(id, 0);
        }
        map.set(id, map.get(id) + val);
    };
  
    const merged = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
    
    return merged;
};

//given an array of subarrays containing integers in a [0,1] format;
//return an array of subarrays; the subarrays should all have a unique [0] element and the [1] element should be combined/summed/reduced with any other elements containing the same [0] element; the array should be sorted in ascending order by the [0] element
//console.log(mergeArrays([[1,2],[2,3],[4,5]],[[1,4],[3,2],[4,1]]), [[1,6],[2,3],[3,2],[4,6]]);
//console.log(mergeArrays([[2,4],[3,6],[5,5]],[[1,3],[4,3]]), [[1,3],[2,4],[3,6],[4,3],[5,5]]);