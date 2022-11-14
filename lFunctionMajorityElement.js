// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
    //use a charmap to create an object telling which element occurs the most in the given array
    let charMap = {};
    let maxCharValue = 0;
    
    let maxChar = '';

    for (let num of nums){
        if(charMap.hasOwnProperty(num)){
            charMap[num]++;
        }else{
            charMap[num]=1;
        }
    }
    for (let num in charMap){
        if(charMap[num]>maxCharValue){
            maxCharValue = charMap[num];
            maxChar = num
        }
    }
    return Number(maxChar)
};

//given an array of elements with one of the elements being a majority in quantity
//return the element that is the majority
//input([3,2,3]), output(3);
//input([2,2,1,1,1,2,2]), output(2)