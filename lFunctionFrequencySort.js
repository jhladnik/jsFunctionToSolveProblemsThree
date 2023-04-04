// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

var frequencySort = function(nums) {
    //create a hashmap of the elements and their occurences; sort the map and if the occurence value is the same, make sure to sort elements in decreasing order; return sorted array
    let numsMap = new Map();
    for(let el of nums){
        numsMap.set(el, (numsMap.get(el) || 0) + 1);
    };
    return nums.sort((a,b)=> {
        if(numsMap.get(a) === numsMap.get(b)){
            return b-a
        }else{
            return numsMap.get(a) - numsMap.get(b)
        };
    });
};

//given an array of integer;
//return an array of integers with them sorted in non-decreasing, number of occurences in the given array; if there are multiple integers with the same amount of occurences, sort those integers in decreasing order/value
//console.log(frequencySort([1,1,2,2,2,3]), [3,1,1,2,2,2]);
//console.log(frequencySort([2,3,1,3,2]), [1,3,3,2,2]);
//console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]), [5,-1,4,4,-6,-6,1,1,1]);