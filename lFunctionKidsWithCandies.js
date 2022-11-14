// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    //find the largest number from the original array, then create an array that adds the xtra to the original
    //kids' amounts, if the new amounts are bigger than the largest, throw a true, else false
    let currentLargest = Math.max(...candies);
    let trick = candies.map(el=>{
        return el+extraCandies                      
    });
    let treat = trick.map(ex=>{
        return ex>=currentLargest ? true:false    
    });
    return treat
};

//given an array of numbers and a separate number to add to the numbers
//return an array of booleans; if the number plus the extra number is greater than the max of the
//original array, throw true; else false
//input([2,3,5,1,3], 3), output([true,true,true,false,true]);
//input([4,2,1,1,2], 1), output([true,false,false,false,false]);