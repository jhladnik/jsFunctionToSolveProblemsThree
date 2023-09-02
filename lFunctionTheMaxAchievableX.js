// You are given two integers, num and t.

// An integer x is called achievable if it can become equal to num after applying the following operation no more than t times:

// Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
// Return the maximum possible achievable number. It can be proven that there exists at least one achievable number.

var theMaximumAchievableX = function(num, t) {
    //return num added to t+t
    return num+(t+t)
};

//given two integers (num) and (t); given the fact that an integer is considered "achievable" if it can become equal to num with applying an operation t times; the operation to apply is incrementing or decrementing the achievable integer by 1 and simultaneously incrementing or decrementing num by 1
//return the maximum achievable integer
//console.log(theMaximumAchievableX(4,1), 6);
//console.log(theMaximumAchievableX(3,2), 7);