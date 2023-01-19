// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    //use the map method to square each of the elements; return the array after it has been sorted
    let squared = nums.map(el=>{
        return el*el
    })
    return squared.sort((a,b)=>a-b)
};

//given an array of integers, both negative and positive, sorted in increasing order
//return an array in increasing order of the squares of the the original array's elements
//console.log(sortedSquares([-4,-1,0,3,10]), [0,1,9,16,100]);
//console.log(sortedSquares([-7,-3,2,3,11]), [4,9,9,49,121]);