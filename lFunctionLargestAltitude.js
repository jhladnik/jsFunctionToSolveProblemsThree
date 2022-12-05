// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

var largestAltitude = function(gain) {
    //create an array containing the starting point of 0, loop through the input adding the element to 0,
    //push each sum to the new array, return the max of the array
    let alts = [0];
    for (let i=0; i<gain.length; i++){
        alts.push(alts[alts.length-1]+gain[i])
    }
    return Math.max(...alts)
};

//given an array of integers, both negative and positive; the integers represent a drop or rise in altitude
//return the highest integer (altitude)
//console.log(largestAltitude([-5,1,5,0,-7]), 1)
//console.log(largestAltitude([-4,-3,-2,-1,4,3,2]), 0)