// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

var heightChecker = function(heights) {
    //make a copy of the given array, sort it in non-decreasing order; create a counter and set to 0; loop through the new array and see if the element is the same as the given array; if it is not, increment the counter; return the counter
    let copy = heights.slice(0).sort((a,b)=>a-b);
    let wrong = 0;

    for(let i=0; i<copy.length; i++){
        if(copy[i] !== heights[i]){
            wrong++
        }
    }
    return wrong
};

//given an array of integers that are in random order
//return the amount of indices that are not in the correct place if the given array was supposed to be in non-decreasing order
//console.log(heightChecker([1,1,4,2,1,3]), 3);
//console.log(heightChecker([5,1,2,3,4]), 5);
//console.log(heightChecker([1,2,3,4,5]), 0);