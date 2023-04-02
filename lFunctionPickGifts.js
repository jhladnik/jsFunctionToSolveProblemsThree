// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

// Choose the pile with the maximum number of gifts.
// If there is more than one pile with the maximum number of gifts, choose any.
// Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
// Return the number of gifts remaining after k seconds.

var pickGifts = function(gifts, k) {
    //USE RECURSION
    if(k===0){
        return gifts.reduce((acc,c)=>acc+c,0);
    }
    let mapped = gifts.map(el=>{
        if(el===Math.max(...gifts)){
            return Math.floor(Math.sqrt(el));
        }
        return el;
    });
    return pickGifts(mapped,k-1);
};

//given an array of integers and the parameter k which is also an integer
//return the sum of the array after removing the largest integer of the array and replacing it with the square root of it rounded down k times
//console.log(pickGifts([25,64,9,4,100], 4), 29);
//console.log(pickGifts([1,1,1,1], 4), 4);